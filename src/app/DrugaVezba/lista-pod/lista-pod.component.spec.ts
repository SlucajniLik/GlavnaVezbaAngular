import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPodComponent } from './lista-pod.component';

describe('ListaPodComponent', () => {
  let component: ListaPodComponent;
  let fixture: ComponentFixture<ListaPodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
