import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CthulhuCoverPageComponent } from './cthulhu-cover-page.component';

describe('CthulhuCoverPageComponent', () => {
  let component: CthulhuCoverPageComponent;
  let fixture: ComponentFixture<CthulhuCoverPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CthulhuCoverPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CthulhuCoverPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
