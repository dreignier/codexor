import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedactorPrintablePageComponent } from './redactor-printable-page.component';

describe('RedactorPrintablePageComponent', () => {
  let component: RedactorPrintablePageComponent;
  let fixture: ComponentFixture<RedactorPrintablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedactorPrintablePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedactorPrintablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
