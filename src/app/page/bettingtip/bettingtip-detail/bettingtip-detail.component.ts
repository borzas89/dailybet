import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Bettingtip} from '../../../model/bettingtip';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-bettingtip-detail',
  templateUrl: './bettingtip-detail.component.html',
  styleUrls: ['./bettingtip-detail.component.scss']
})
export class BettingtipDetailComponent implements OnInit {


  sports: any[] = ['baseball', 'basketball', 'boxing', 'football', 'hockey',
    'motorsport', 'soccer', 'tennis', 'volleyball'];

  modalMessage: string;
  closeResult: string;

  constructor(private modalService: NgbModal,
              private route: ActivatedRoute,
              private router: Router) { }


  bettingTip = new Bettingtip();


  ngOnInit() {
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

  resetForm(form: NgForm){
    form.reset();
  }

  navigateBack() {
    this.router.navigate(['bettingtip/']);
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
