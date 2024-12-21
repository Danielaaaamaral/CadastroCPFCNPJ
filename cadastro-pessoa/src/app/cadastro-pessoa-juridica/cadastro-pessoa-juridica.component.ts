import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-pessoa-juridica',
  standalone: false,
  
  templateUrl: './cadastro-pessoa-juridica.component.html',
  styleUrl: './cadastro-pessoa-juridica.component.css'
})
export class CadastroPessoaJuridicaComponent {
  cadastroCnpjForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cadastroCnpjForm = this.fb.group({
      cnpj: ['', [Validators.required, Validators.pattern(/^\d{14}$/)]],
      razaoSocial: ['', [Validators.required, Validators.minLength(3)]],
      dataFundacao: ['', Validators.required],
      nomeFantasia: ['', [Validators.required, Validators.minLength(3)]],
      atividadeDesenvolvida: ['', Validators.required]
    });
  }

  
  onSubmit() {
    debugger;
    if (this.cadastroCnpjForm.valid) {
      console.log('Dados do Cadastro:', this.cadastroCnpjForm.value);
      alert('Cadastro realizado com sucesso!');
      this.cadastroCnpjForm.reset();
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }
}
