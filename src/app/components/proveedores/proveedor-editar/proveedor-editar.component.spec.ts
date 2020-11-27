import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorEditarComponent } from './proveedor-editar.component';

describe('ProveedorEditarComponent', () => {
  let component: ProveedorEditarComponent;
  let fixture: ComponentFixture<ProveedorEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProveedorEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
