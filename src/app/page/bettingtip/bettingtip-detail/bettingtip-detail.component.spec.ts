import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BettingtipDetailComponent } from './bettingtip-detail.component';

describe('BettingtipDetailComponent', () => {
  let component: BettingtipDetailComponent;
  let fixture: ComponentFixture<BettingtipDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BettingtipDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BettingtipDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
