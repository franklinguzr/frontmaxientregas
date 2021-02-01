import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonasListarComponent } from './zonas-listar.component';

describe('ZonasListarComponent', () => {
  let component: ZonasListarComponent;
  let fixture: ComponentFixture<ZonasListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonasListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonasListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
