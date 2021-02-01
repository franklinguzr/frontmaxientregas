import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonasEditarComponent } from './zonas-editar.component';

describe('ZonasEditarComponent', () => {
  let component: ZonasEditarComponent;
  let fixture: ComponentFixture<ZonasEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonasEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonasEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});