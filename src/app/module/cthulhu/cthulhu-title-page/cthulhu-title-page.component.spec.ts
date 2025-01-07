import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CthulhuTitlePageComponent } from './cthulhu-title-page.component';

describe('CthulhuTitlePageComponent', () => {
  let component: CthulhuTitlePageComponent;
  let fixture: ComponentFixture<CthulhuTitlePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CthulhuTitlePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CthulhuTitlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
