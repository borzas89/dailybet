import { Component, OnInit } from '@angular/core';
import {Bettingtip} from '../../../model/bettingtip';
import {Singletip} from '../../../model/singletip';
import {Router} from '@angular/router';
import {BettingtipService} from '../../../service/bettingtip.service';

@Component({
  selector: 'app-bettingtip-list',
  templateUrl: './bettingtip-list.component.html',
  styleUrls: ['./bettingtip-list.component.scss']
})
export class BettingtipListComponent implements OnInit {

  items: Array<any>;
  today_bettingtip_items: Array<Bettingtip>;
  today_singletip_items: Array<Singletip>;
  isAnalysisInProgress: boolean = true;
  todayDate: Date;
  constructor(private bettingtipService: BettingtipService,
              private router: Router) {

  }

  ngOnInit() {
    this.findAllFreeBettingTipsToday();
    this.findAllFreeSingleTipsToday();
    this.todayDate = new Date();
  }

  // betting tips with analysis
  findAllFreeBettingTipsToday(){
    this.bettingtipService.findAllFreeTipsToday().subscribe(data => {
      this.today_bettingtip_items = data;
      if(this.today_bettingtip_items != null) {
        this.isAnalysisInProgress = false;
      }
    });
  }

  // single tips
  findAllFreeSingleTipsToday(){
    this.bettingtipService.findFreeSingleTipsToday().subscribe(data => {
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
    this.router.navigate(['/bettingtip/detail/' + item]);
  }

  deleteTip(item) {

  }

  editTip(item) {
    console.log(item.payload.doc.id);
    this.router.navigate(['add-betting-tips/' + item.tippUid]);
  }




}
