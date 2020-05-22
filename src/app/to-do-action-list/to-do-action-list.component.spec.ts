import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoActionListComponent } from './to-do-action-list.component';

describe('ToDoActionListComponent', () => {
  let component: ToDoActionListComponent;
  let fixture: ComponentFixture<ToDoActionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoActionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoActionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
