import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTaskMgrComponent } from './view-task-mgr.component';

describe('ViewTaskMgrComponent', () => {
  let component: ViewTaskMgrComponent;
  let fixture: ComponentFixture<ViewTaskMgrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTaskMgrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTaskMgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
