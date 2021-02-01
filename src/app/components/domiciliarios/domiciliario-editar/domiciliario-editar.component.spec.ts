import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomiciliarioEditarComponent } from './domiciliario-editar.component';

describe('DomiciliarioEditarComponent', () => {
  let component: DomiciliarioEditarComponent;
  let fixture: ComponentFixture<DomiciliarioEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomiciliarioEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomiciliarioEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
