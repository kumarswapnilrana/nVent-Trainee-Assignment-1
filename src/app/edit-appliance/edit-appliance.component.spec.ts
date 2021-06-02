import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditApplianceComponent } from './edit-appliance.component';

describe('EditApplianceComponent', () => {
  let component: EditApplianceComponent;
  let fixture: ComponentFixture<EditApplianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditApplianceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditApplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
