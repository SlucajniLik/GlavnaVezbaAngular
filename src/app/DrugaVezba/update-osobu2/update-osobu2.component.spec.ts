import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOsobu2Component } from './update-osobu2.component';

describe('UpdateOsobu2Component', () => {
  let component: UpdateOsobu2Component;
  let fixture: ComponentFixture<UpdateOsobu2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOsobu2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateOsobu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
