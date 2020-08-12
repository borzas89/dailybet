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
  isTippWins: any[]  = ['YES', 'NO'];

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
  preloadSportsValue;
  selectedTippIsWin: string;




  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log('paramMap id ' + params.get('id'));
      this.tippUid = params.get('id');
    });
    // handling edit/create stuffs
    if (this.tippUid) {
      this.isEditMode = true;
      this.bettingTip = new Bettingtip();
      this.bettingtipService.findOneTippByUid(this.tippUid).subscribe( data => {
          this.bettingTip = data;
          this.preloadSportsValue = this.preloadSportsValues(this.bettingTip.sportcategory);
      });
    }

  }

  preloadSportsValues(sportsCategory: string) {
    for(let i = 0; i < this.sports.length; i++) {
      if(this.sports[i] === sportsCategory) {
        this.preloadSportsValue  = i;
        this.selectedCategory = this.preloadSportsValue;
      }
    }
  }

  selectTippIsWin(val: string) {
    this.selectedTippIsWin = val;

  }

  onSubmit(ngForm: NgForm): void {

    // update
    if ( this.isEditMode ) {
      this.bettingTip.tippUid = this.tippUid;
      // create betting tip
      this.bettingTip.event = ngForm.value.event;
      this.bettingTip.tippster = this.adminService.currentUser.name;
      this.bettingTip.sportcategory = this.selectedCategory;
      this.bettingTip.category = "FREE";
      this.bettingTip.deadline = ngForm.value.deadline;
      this.bettingTip.result = null;
      this.bettingTip.isWin = false;

      if (this.selectedTippIsWin === 'YES') {
        this.bettingTip.isWin = true;
      }

      this.bettingTip.datestamp = new Date(ngForm.value.date);
      this.bettingTip.dateString = ngForm.value.date;
      this.bettingTip.result = ngForm.value.result;

      const str = this.bettingTip.event;
      const dateStr = this.bettingTip.dateString;
      const replaced = str.split(' ').join('-');
      const dateRep = dateStr.split('T').join('-');
      this.bettingTip.tippUid = replaced + '-' + dateRep ;

      this.adminService.updateBettingTip(this.bettingTip).subscribe(data => {
        this.modalMessage = 'Success';
      }, err => {
        this.modalMessage = 'Error has occured';
        console.log('error ' + err.valueOf().toString());
      });



    } else {
      // create betting tip
      this.bettingTip.event = ngForm.value.event;
      this.bettingTip.tippster = this.adminService.currentUser.name;
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
