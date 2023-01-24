import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTodotaskComponent } from './update-todotask.component';

describe('UpdateTodotaskComponent', () => {
  let component: UpdateTodotaskComponent;
  let fixture: ComponentFixture<UpdateTodotaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTodotaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTodotaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
