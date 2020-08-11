import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Bettingtip} from '../../../model/bettingtip';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Router} from '@angular/router';

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
              private router: Router) { }


  bettingTip = new Bettingtip();
  selectedCategory: string;
  isEditMode = false;
  tippUid: string;


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log('paramMap id ' + params.get('id'));
      this.tippUid = params.get('id');
    });
  }

  onSubmit(ngForm: NgForm): void {
    const putObject = Object.assign({id: this.bettingTip.id}, ngForm.value);

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
