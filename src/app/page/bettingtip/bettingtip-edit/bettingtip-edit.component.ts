import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Bettingtip} from '../../../model/bettingtip';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Router} from '@angular/router';
import {BettingtipService} from '../../../service/bettingtip.service';
import {AdminService} from '../../../service/admin.service';

@Component({
  selector: 'app-bettingtip-edit',
  templateUrl: './bettingtip-edit.component.html',
  styleUrls: ['./bettingtip-edit.component.scss']
})
export class BettingtipEditComponent implements OnInit {


  sports: any[] = ['baseball', 'basketball', 'boxing', 'football', 'hockey',
    'motorsport', 'soccer', 'tennis', 'volleyball'];

  modalMessage: string;
  closeResult: string;

  constructor(private modalService: NgbModal,
              private route: ActivatedRoute,
              private router: Router,
              private bettingtipService: BettingtipService,
              private adminService: AdminService) { }


  bettingTip = new Bettingtip();
  selectedCategory: string;
  isEditMode = false;
  tippUid: string;


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log('paramMap id ' + params.get('id'));
      this.tippUid = params.get('id');
    });
    this.bettingTip = new Bettingtip();
    this.bettingtipService.findOneTippByUid(this.tippUid).subscribe( data => {
      if ( data !== null ) {
        this.bettingTip = data;
      }
    });
  }

  onSubmit(ngForm: NgForm): void {
    // create betting tip
    this.bettingTip.event = ngForm.value.event;
    this.bettingTip.tippster = this.adminService.currentUser.username;
    this.bettingTip.sportcategory = this.selectedCategory;
    this.bettingTip.category = "FREE";
    this.bettingTip.deadline = ngForm.value.deadline;
    this.bettingTip.result = "";
    this.bettingTip.isWin = false;
    this.bettingTip.datestamp = new Date(ngForm.value.date);
    this.bettingTip.dateString = ngForm.value.date;

    const str = this.bettingTip.event;
    const dateStr = this.bettingTip.dateString;
    const replaced = str.split(' ').join('-');
    const dateRep = dateStr.split('T').join('-');
    this.bettingTip.tippUid = replaced + '-' + dateRep ;

    this.adminService.createBettingTip(this.bettingTip).subscribe(data => {
      this.modalMessage = 'Success';
    }, err => {
      this.modalMessage = 'Error has occured';
      console.log('error ' + err.valueOf().toString());
    });

  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  resetForm(form: NgForm) {
    form.reset();
  }

  navigateBack() {
    this.router.navigate(['bettingtip/']);
  }

  selectSportsCategory(val: string) {
    this.selectedCategory = val;
    this.bettingTip.sportcategory = val;
    console.log('selected ' + val);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


}
