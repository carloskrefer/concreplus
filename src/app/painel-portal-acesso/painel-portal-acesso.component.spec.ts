import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelPortalAcessoComponent } from './painel-portal-acesso.component';

describe('PainelPortalAcessoComponent', () => {
  let component: PainelPortalAcessoComponent;
  let fixture: ComponentFixture<PainelPortalAcessoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PainelPortalAcessoComponent]
    });
    fixture = TestBed.createComponent(PainelPortalAcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
