import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CadastroPessoaJuridicaService} from './cadastro-pessoa-juridica.service';
import PessoaJuridica from '../shared/models/PessoaJuridica.model';

@Component({
  selector: 'app-cadastro-pessoa-juridica',
  standalone: false,
  
  templateUrl: './cadastro-pessoa-juridica.component.html',
  styleUrl: './cadastro-pessoa-juridica.component.css'
})
export class CadastroPessoaJuridicaComponent {
  cadastroCnpjForm: FormGroup;
  pessoa: PessoaJuridica ;
  pessoas: PessoaJuridica[]=[];


  constructor(private fb: FormBuilder,
    private readonly pessoaJuridicaService : CadastroPessoaJuridicaService) {
    this.cadastroCnpjForm = this.fb.group({
      cnpj: ['', [Validators.required, Validators.pattern(/^\d{14}$/)]],
      razaoSocial: ['', [Validators.required, Validators.minLength(3)]],
      dataFundacao: ['', Validators.required],
      nomeFantasia: ['', [Validators.required, Validators.minLength(3)]],
      atividadeDesenvolvida: ['', Validators.required]
    });
    this.pessoa = {
    cnpj: this.cadastroCnpjForm.controls["cnpj"].value,
    razaoSocial:this.cadastroCnpjForm.controls["razaoSocial"].value,
    dataFundacao:this.cadastroCnpjForm.controls["dataFundacao"].value,
    nomeFantasia:this.cadastroCnpjForm.controls["nomeFantasia"].value,
    atividadeDesenvolvida:this.cadastroCnpjForm.controls["atividadeDesenvolvida"].value
    };
  }

  listarPessoas(): void {
    this.pessoaJuridicaService.listar().subscribe({
      next: (res: any) => (this.pessoas = res),
      error: (err: any) => console.error('Erro ao listar pessoas juridícas', err),
    });
  }

  criarPessoa(): void {

    this.pessoaJuridicaService.criar(this.pessoa).subscribe({
      next: (res: any) => {
        console.log('Pessoa criada com sucesso!', res);
        this.listarPessoas();
      },
      error: (err: any) => console.error('Erro ao criar pessoa juridíca', err),
    });
  }


  atualizarPessoa(id: number): void {
    this.pessoaJuridicaService.atualizar(id,this.pessoa).subscribe({
      next: (res: any) => {
        console.log('Pessoa atualizada com sucesso!', res);
        this.listarPessoas();
      },
      error: (err: any) => console.error('Erro ao atualizar pessoa juridíca', err),
    });
  }

  excluirPessoa(id: number): void {
    this.pessoaJuridicaService.excluir(id).subscribe({
      next: () => {
        console.log('Pessoa excluída com sucesso!');
        this.listarPessoas();
      },
      error: (err: any) => console.error('Erro ao excluir pessoa juridíca', err),
    });
  }
  
  onSubmit() {
    if (this.cadastroCnpjForm.valid) {
      this.criarPessoa();
      alert('Cadastro realizado com sucesso!');
      this.cadastroCnpjForm.reset();
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }
}
