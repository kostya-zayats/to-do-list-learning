import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoActionAddComponent } from './to-do-action-add.component';

describe('ToDoActionAddComponent', () => {
  let component: ToDoActionAddComponent;
  let fixture: ComponentFixture<ToDoActionAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoActionAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoActionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
