import { Component, OnInit } from '@angular/core';
import {BettingtipService} from '../../service/bettingtip.service';
import {Bettingtip} from '../../model/bettingtip';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  old_analysis: Array<Bettingtip>;
  constructor(private bettingtipService: BettingtipService,
              private router: Router) { }

  ngOnInit() {
    this.getDatas();
  }
  getDatas() {
    this.bettingtipService.findOldTips().subscribe(data => {
      this.old_analysis = data;
    });
  }

  openTip(item) {
    this.router.navigate(['/bettingtip/detail/' + item]);
  }

}
