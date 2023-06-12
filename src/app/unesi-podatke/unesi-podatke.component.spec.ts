import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnesiPodatkeComponent } from './unesi-podatke.component';

describe('UnesiPodatkeComponent', () => {
  let component: UnesiPodatkeComponent;
  let fixture: ComponentFixture<UnesiPodatkeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnesiPodatkeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnesiPodatkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
