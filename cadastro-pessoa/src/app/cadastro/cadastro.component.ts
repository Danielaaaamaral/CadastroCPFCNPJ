import { Component , Inject, OnInit} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators  } from '@angular/forms';
import TiposPessoaResponse from '../shared/models/TiposPessoaResponse';




@Component({
  selector: 'app-cadastro',
  standalone: false,
  
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  // readonly form: FormGroup;
  public tiposPessoas!: TiposPessoaResponse[];
  public tipoPessoa: string = "J";
 
  constructor(private readonly formBuilder: FormBuilder) {

    this.tiposPessoas=[
      { id:"1",
        valor:"J",
        descricao:"Júridica",
      },
      { id:"2",
        valor:"F",
        descricao:"Física",
      }
    ]

  
    }
  
    public changeFisicaJuridica() {
      this.tipoPessoa = this.tipoPessoa == "F" ?"J":"F";
    }
}
