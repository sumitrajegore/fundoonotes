import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetpasswardComponent } from './resetpassward.component';

describe('ResetpasswardComponent', () => {
  let component: ResetpasswardComponent;
  let fixture: ComponentFixture<ResetpasswardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetpasswardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetpasswardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
