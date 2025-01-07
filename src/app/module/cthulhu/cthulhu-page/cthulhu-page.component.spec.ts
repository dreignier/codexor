import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CthulhuPageComponent } from './cthulhu-page.component';

describe('CthulhuPageComponent', () => {
  let component: CthulhuPageComponent;
  let fixture: ComponentFixture<CthulhuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CthulhuPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CthulhuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
