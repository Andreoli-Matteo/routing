import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PegasoComponent } from './pegaso.component';

describe('PegasoComponent', () => {
  let component: PegasoComponent;
  let fixture: ComponentFixture<PegasoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PegasoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PegasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
