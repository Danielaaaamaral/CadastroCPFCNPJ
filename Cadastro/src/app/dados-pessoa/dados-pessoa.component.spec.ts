import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosPessoaComponent } from './dados-pessoa.component';

describe('DadosPessoaComponent', () => {
  let component: DadosPessoaComponent;
  let fixture: ComponentFixture<DadosPessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DadosPessoaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
