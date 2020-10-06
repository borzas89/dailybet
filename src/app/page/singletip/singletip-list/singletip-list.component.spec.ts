import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingletipListComponent } from './singletip-list.component';

describe('SingletipListComponent', () => {
  let component: SingletipListComponent;
  let fixture: ComponentFixture<SingletipListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingletipListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingletipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
