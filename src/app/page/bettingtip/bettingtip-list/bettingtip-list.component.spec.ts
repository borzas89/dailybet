import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BettingtipListComponent } from './bettingtip-list.component';

describe('BettingtipListComponent', () => {
  let component: BettingtipListComponent;
  let fixture: ComponentFixture<BettingtipListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BettingtipListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BettingtipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
