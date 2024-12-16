import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPessoaJuridicaComponent } from './cadastro-pessoa-juridica.component';

describe('CadastroPessoaJuridicaComponent', () => {
  let component: CadastroPessoaJuridicaComponent;
  let fixture: ComponentFixture<CadastroPessoaJuridicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroPessoaJuridicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroPessoaJuridicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
