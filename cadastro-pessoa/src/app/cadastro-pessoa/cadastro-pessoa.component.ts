import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroPessoaService } from './cadastro-pessoa.service';
import PessoaFisica from '../shared/models/PessoaFisica.model';

@Component({
  selector: 'app-cadastro-pessoa',
  standalone: false,
  
  templateUrl: './cadastro-pessoa.component.html',
  styleUrl: './cadastro-pessoa.component.css'
})
export class CadastroPessoaComponent {
cadastroForm: FormGroup;
 pessoa: PessoaFisica;
 pessoas: PessoaFisica[]=[];

  generos = ['Masculino', 'Feminino', 'Outro'];
  estadosCivis = ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)'];

  constructor(private fb: FormBuilder,private pessoaFisicaService: CadastroPessoaService) {
    this.cadastroForm = this.fb.group({
      cpf: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      dataNascimento: ['', Validators.required],
      genero: ['', Validators.required],
      estadoCivil: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
    this.pessoa={
      cpf:this.cadastroForm.controls["cpf"].value,
      nome:this.cadastroForm.controls["nome"].value,
      dataNascimento:this.cadastroForm.controls["dataNascimento"].value,
      genero:this.cadastroForm.controls["genero"].value,
    estadoCivil:this.cadastroForm.controls["estadoCivil"].value,
    email:this.cadastroForm.controls["email"].value

    }
  }

  listarPessoas(): void {
    this.pessoaFisicaService.listar().subscribe({
      next: (res: any) => (this.pessoas = res),
      error: (err: any) => console.error('Erro ao listar pessoas juridícas', err),
    });
  }

  criarPessoa(): void {
    this.pessoaFisicaService.criar(this.pessoa).subscribe({
      next: (res: any) => {
        console.log('Pessoa criada com sucesso!', res);
        this.listarPessoas();
      },
      error: (err: any) => console.error('Erro ao criar pessoa juridíca', err),
    });
  }


  atualizarPessoa(id: number): void {
    this.pessoaFisicaService.atualizar(id, this.pessoa).subscribe({
      next: (res: any) => {
        console.log('Pessoa atualizada com sucesso!', res);
        this.listarPessoas();
      },
      error: (err: any) => console.error('Erro ao atualizar pessoa juridíca', err),
    });
  }

  excluirPessoa(id: number): void {
    this.pessoaFisicaService.excluir(id).subscribe({
      next: () => {
        console.log('Pessoa excluída com sucesso!');
        this.listarPessoas();
      },
      error: (err: any) => console.error('Erro ao excluir pessoa juridíca', err),
    });
  }
  
  onSubmit() {
    if (this.cadastroForm.valid) {
      console.log('Dados do Formulário:', this.cadastroForm.value);
      alert('Cadastro realizado com sucesso!');
      this.cadastroForm.reset();
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }
}
