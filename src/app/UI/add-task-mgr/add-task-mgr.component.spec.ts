import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskMgrComponent } from './add-task-mgr.component';

describe('AddTaskMgrComponent', () => {
  let component: AddTaskMgrComponent;
  let fixture: ComponentFixture<AddTaskMgrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTaskMgrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskMgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
