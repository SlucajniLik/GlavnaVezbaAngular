import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOsobaComponent } from './update-osoba.component';

describe('UpdateOsobaComponent', () => {
  let component: UpdateOsobaComponent;
  let fixture: ComponentFixture<UpdateOsobaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOsobaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateOsobaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
