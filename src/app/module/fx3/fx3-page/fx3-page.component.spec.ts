import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fx3PageComponent } from './fx3-page.component';

describe('Fx3PageComponent', () => {
  let component: Fx3PageComponent;
  let fixture: ComponentFixture<Fx3PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fx3PageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fx3PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
