import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadebarComponent } from './headebar.component';

describe('HeadebarComponent', () => {
  let component: HeadebarComponent;
  let fixture: ComponentFixture<HeadebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
