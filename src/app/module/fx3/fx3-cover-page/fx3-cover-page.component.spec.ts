import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fx3CoverPageComponent } from './fx3-cover-page.component';

describe('Fx3CoverPageComponent', () => {
  let component: Fx3CoverPageComponent;
  let fixture: ComponentFixture<Fx3CoverPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fx3CoverPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fx3CoverPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
