import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliancePageComponent } from './appliance-page.component';

describe('AppliancePageComponent', () => {
  let component: AppliancePageComponent;
  let fixture: ComponentFixture<AppliancePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppliancePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliancePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
