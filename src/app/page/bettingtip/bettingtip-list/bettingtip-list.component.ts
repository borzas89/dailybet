import { Component, OnInit } from '@angular/core';
import {Bettingtip} from '../../../model/bettingtip';
import {SingleTip} from '../../../model/single-tip';
import {UserService} from '../../../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bettingtip-list',
  templateUrl: './bettingtip-list.component.html',
  styleUrls: ['./bettingtip-list.component.scss']
})
export class BettingtipListComponent implements OnInit {

  items: Array<any>;
  today_bettingtip_items: Array<Bettingtip>;
  today_singletip_items: Array<SingleTip>;
  isAnalysisInProgress: boolean = true;
  todayDate: Date;
  constructor(private userService: UserService,
              private router: Router) {

  }

  ngOnInit() {
    // this.findAllTips();
    this.findAllFreeBettingTipsToday()
    this.findAllFreeSingleTipsToday();
    this.todayDate = new Date();
  }

  // elemzések
  findAllFreeBettingTipsToday(){
    this.userService.findAllFreeTipsToday().subscribe(data => {
      this.today_bettingtip_items = data;
      if(this.today_bettingtip_items != null) {
        this.isAnalysisInProgress = false;
      }
    });
  }

  // singletippek
  findAllFreeSingleTipsToday(){
    this.userService.findFreeSingleTipsToday().subscribe(data => {
      this.today_singletip_items = data;
      if(this.today_singletip_items != null) {
        this.isAnalysisInProgress = false;
      }
    });
  }

  editSingleTip(singleTip){
    this.router.navigate(['add-single-tips/' + singleTip]);
  }


  openTip(item) {
    console.log(item.tippUid);
    // this.router.navigate(['/tippek', { id: item.tippUid}]);
    this.router.navigate(['/tippek/' + item]);
  }

  deleteTip(item) {

  }

  editTip(item) {
    console.log(item.payload.doc.id);
    this.router.navigate(['add-betting-tips/' + item.tippUid]);
  }




}
