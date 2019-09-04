import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyTaskMgrComponent } from './modify-task-mgr.component';

describe('ModifyTaskMgrComponent', () => {
  let component: ModifyTaskMgrComponent;
  let fixture: ComponentFixture<ModifyTaskMgrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyTaskMgrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyTaskMgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
