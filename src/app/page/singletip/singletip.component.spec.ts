import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingletipComponent } from './singletip.component';

describe('SingletipComponent', () => {
  let component: SingletipComponent;
  let fixture: ComponentFixture<SingletipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingletipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingletipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
