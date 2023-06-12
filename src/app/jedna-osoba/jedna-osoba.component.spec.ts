import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JednaOsobaComponent } from './jedna-osoba.component';

describe('JednaOsobaComponent', () => {
  let component: JednaOsobaComponent;
  let fixture: ComponentFixture<JednaOsobaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JednaOsobaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JednaOsobaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
