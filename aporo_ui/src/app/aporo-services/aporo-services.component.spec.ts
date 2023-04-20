import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AporoServicesComponent } from './aporo-services.component';

describe('AporoServicesComponent', () => {
  let component: AporoServicesComponent;
  let fixture: ComponentFixture<AporoServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AporoServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AporoServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
