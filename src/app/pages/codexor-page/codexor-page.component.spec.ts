import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodexorPageComponent } from './codexor-page.component';

describe('CodexorPageComponent', () => {
  let component: CodexorPageComponent;
  let fixture: ComponentFixture<CodexorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodexorPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodexorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
