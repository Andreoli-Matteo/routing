import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FOOComponent } from './foo.component';

describe('FOOComponent', () => {
  let component: FOOComponent;
  let fixture: ComponentFixture<FOOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FOOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FOOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
