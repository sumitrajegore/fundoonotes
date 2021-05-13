import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetpasswardComponent } from './forgetpassward.component';

describe('ForgetpasswardComponent', () => {
  let component: ForgetpasswardComponent;
  let fixture: ComponentFixture<ForgetpasswardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetpasswardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetpasswardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
