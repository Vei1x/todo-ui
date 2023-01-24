import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodotaskDetailsComponent } from './todotask-details.component';

describe('TodotaskDetailsComponent', () => {
  let component: TodotaskDetailsComponent;
  let fixture: ComponentFixture<TodotaskDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodotaskDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodotaskDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
