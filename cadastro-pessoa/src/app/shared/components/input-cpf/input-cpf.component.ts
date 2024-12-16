import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-cpf',
  standalone: false,
  
  templateUrl: './input-cpf.component.html',
  styleUrl: './input-cpf.component.css'
})
export class InputCpfComponent {
  cpfForm: FormGroup;

  @Output() cpfValido = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {
    this.cpfForm = this.fb.group({
      cpf: ['', [Validators.required, this.cpfValidator]]
    });
  }

  // Validador personalizado para CPF
  cpfValidator(control: any): { [key: string]: boolean } | null {
    const cpf = control.value;

    if (!cpf) return null;

    if (cpf.length !== 11 || !/^\d{11}$/.test(cpf)) {
      return { invalidCpf: true };
    }

    if (!this.validarCPF(cpf)) {

      return { invalidCpf: true };
    }

    return null;
  }

  // Função que valida o CPF
  private validarCPF(cpf: string): boolean {
    debugger;
    let soma = 0;
    let resto;

    if (cpf === '00000000000') return false;

    for (let i = 1; i <= 9; i++) {
      soma += parseInt(cpf.substring(i - 1, i), 10) * (11 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10), 10)) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) {
      soma += parseInt(cpf.substring(i - 1, i), 10) * (12 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11), 10)) return false;

    return true;
  }

}

