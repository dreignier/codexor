import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fx3TitlePageComponent } from './fx3-title-page.component';

describe('Fx3TitlePageComponent', () => {
  let component: Fx3TitlePageComponent;
  let fixture: ComponentFixture<Fx3TitlePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fx3TitlePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fx3TitlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
