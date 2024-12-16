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
      cnpj: ['', [Validators.required, this.cnpjValidator]],
      razaoSocial: ['', [Validators.required, Validators.minLength(3)]],
      dataFundacao: ['', Validators.required],
      nomeFantasia: ['', [Validators.required, Validators.minLength(3)]],
      atividadeDesenvolvida: ['', Validators.required]
    });
  }

  // Validador personalizado para CNPJ
  cnpjValidator(control: any): { [key: string]: boolean } | null {
    const cnpj = control.value;

    if (!cnpj) return null;

    const regex = /^\d{14}$/;
    if (!regex.test(cnpj)) {
      return { invalidCnpj: true };
    }

    if (!this.validarCNPJ(cnpj)) {
      return { invalidCnpj: true };
    }

    return null;
  }

  // Função que valida o CNPJ com o algoritmo oficial
  private validarCNPJ(cnpj: string): boolean {
    cnpj = cnpj.replace(/[^\d]+/g, '');
    if (cnpj.length !== 14) return false;

    // Elimina CNPJs inválidos conhecidos
    if (/^(\d)\1+$/.test(cnpj)) return false;

    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
      soma += parseInt(numeros.charAt(tamanho - i), 10) * pos--;
      if (pos < 2) pos = 9;
    }

    let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado !== parseInt(digitos.charAt(0), 10)) return false;

    tamanho += 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
      soma += parseInt(numeros.charAt(tamanho - i), 10) * pos--;
      if (pos < 2) pos = 9;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado !== parseInt(digitos.charAt(1), 10)) return false;

    return true;
  }

  onSubmit() {
    if (this.cadastroCnpjForm.valid) {
      console.log('Dados do Cadastro:', this.cadastroCnpjForm.value);
      alert('Cadastro realizado com sucesso!');
      this.cadastroCnpjForm.reset();
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }
}
