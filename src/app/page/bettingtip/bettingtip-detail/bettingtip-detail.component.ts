import { Component, OnInit } from '@angular/core';
import {Bettingtip} from '../../../model/bettingtip';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Location} from '@angular/common';
import {BettingtipService} from '../../../service/bettingtip.service';
import {UserService} from '../../../service/user.service';
import {Role} from '../../../model/role';

@Component({
  selector: 'app-bettingtip-detail',
  templateUrl: './bettingtip-detail.component.html',
  styleUrls: ['./bettingtip-detail.component.scss']
})
export class BettingtipDetailComponent implements OnInit {
  bettingTip: Bettingtip = new Bettingtip();
  item: Observable<Bettingtip>;
  selectId: string;
  isEnabled = false;

  constructor(private route: ActivatedRoute,
              public  bettingtipService: BettingtipService,
              private userService: UserService,
              private location: Location,
              private router: Router) { }

  ngOnInit() {
    const evId = this.route.snapshot.params['tippUid'];
    this.selectId = evId;
    const item = this.route.snapshot.params['id'];
    this.bettingTip = new Bettingtip();
    this.bettingtipService.findOneTippByUid(item).subscribe( data => {
      this.bettingTip = data;
    });

    this.userService.currentUser.subscribe( data =>
    this.isEnabled = data.role === Role.ADMIN
    );



  }

  editBettingtip(bettingTip: Bettingtip) {
    console.log('edit: ' + bettingTip.tippUid);
    this.router.navigate(['bettingtip/edit/' + bettingTip.tippUid]);
  }

  navigateBack() {
    this.location.back();
  }

}
