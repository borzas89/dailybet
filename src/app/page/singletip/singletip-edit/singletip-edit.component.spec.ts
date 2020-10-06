import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingletipEditComponent } from './singletip-edit.component';

describe('SingletipEditComponent', () => {
  let component: SingletipEditComponent;
  let fixture: ComponentFixture<SingletipEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingletipEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingletipEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
