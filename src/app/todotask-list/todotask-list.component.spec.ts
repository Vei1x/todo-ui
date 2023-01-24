import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodotaskListComponent } from './todotask-list.component';

describe('TodotaskListComponent', () => {
  let component: TodotaskListComponent;
  let fixture: ComponentFixture<TodotaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodotaskListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodotaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
