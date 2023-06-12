import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnesiPodComponent } from './unesi-pod.component';

describe('UnesiPodComponent', () => {
  let component: UnesiPodComponent;
  let fixture: ComponentFixture<UnesiPodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnesiPodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnesiPodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
