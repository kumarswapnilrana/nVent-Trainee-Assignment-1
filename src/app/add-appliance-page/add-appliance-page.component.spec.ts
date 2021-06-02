import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppliancePageComponent } from './add-appliance-page.component';

describe('AddAppliancePageComponent', () => {
  let component: AddAppliancePageComponent;
  let fixture: ComponentFixture<AddAppliancePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAppliancePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAppliancePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
