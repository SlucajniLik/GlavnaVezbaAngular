import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPodatakaComponent } from './lista-podataka.component';

describe('ListaPodatakaComponent', () => {
  let component: ListaPodatakaComponent;
  let fixture: ComponentFixture<ListaPodatakaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPodatakaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPodatakaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
