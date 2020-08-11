import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BettingtipEditComponent } from './bettingtip-edit.component';

describe('BettingtipDetailComponent', () => {
  let component: BettingtipEditComponent;
  let fixture: ComponentFixture<BettingtipEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BettingtipEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BettingtipEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
