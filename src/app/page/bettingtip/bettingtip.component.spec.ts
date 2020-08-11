import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BettingtipComponent } from './bettingtip.component';

describe('BettingtipComponent', () => {
  let component: BettingtipComponent;
  let fixture: ComponentFixture<BettingtipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BettingtipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BettingtipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
