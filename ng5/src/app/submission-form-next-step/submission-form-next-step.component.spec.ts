import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionFormNextStepComponent } from './submission-form-next-step.component';

describe('SubmissionFormNextStepComponent', () => {
  let component: SubmissionFormNextStepComponent;
  let fixture: ComponentFixture<SubmissionFormNextStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionFormNextStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionFormNextStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
