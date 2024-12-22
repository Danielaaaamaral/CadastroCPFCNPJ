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
  public tipoPessoa: string = "";
 
  constructor(private readonly formBuilder: FormBuilder) {
    // this.tipoPessoaForm = this.formBuilder.group({
    //   tipoPessoa: ['', Validators.required]
    // });
    
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

      // this.form = this.formBuilder.group({
      //   tipoPessoa:[''],
      //   cnpj:['', Validators.required],
      //   razaoSocial:['', Validators.required],
      //   dtaFundacao:['', Validators.required],
      //   nomeFantasia:['', Validators.required],
      //   faturamento:['', Validators.required],
      //   atvDesenvolvida:['', Validators.required],
      //   grauInstrucao:['', Validators.required],
      //   cpf:['', [Validators.required]],
      //   nome:['', Validators.required],
      //   dtaNascimento:['', Validators.required],
      //   genero:['', Validators.required],
      //   estadoCivil:['', Validators.required],
      //   conjuge:['', Validators.required],
      //   renda:['', Validators.required],
      //   naturalidade:['', Validators.required],
      //   nacionalidade:['', Validators.required],
      //   email:['', Validators.required],
      //   confEmail:['', Validators.required],
      //   tipoDocumento:['', Validators.required],
      //   nroDocumento:['', Validators.required],
      //   orgExped:['', Validators.required],
      //   dtaEmissao:['', Validators.required],
      //   nomeMae:[''],
      //   nomePai:[''],
      //   dddMovel:[''],
      //   nroMovel:[''],
      //   dddFixo:[''],
      //   nroFixo:[''],
      //   dddComercial:[''],
      //   nroComercial:[''],
      //   dddMovelEmpresa:[''],
      //   nroMovelEmpresa:[''],
      //   dddFixoEmpresa:[''],
      //   nroFixoEmpresa:[''],
      //   dddComercialEmpresa:[''],
      //   nroComercialEmpresa:[''],
      //   tipoDocumentoEmpresa:['', Validators.required],
      //   nroDocumentoEmpresa:['', Validators.required],
      //   orgExpedEmpresa:['', Validators.required],
      //   dtaEmissaoEmpresa:['', Validators.required],
      //   percentParticipacao:['', Validators.required],
      //   cep:['', Validators.required],
      //   cidade:['', Validators.required],
      //   estado:['', Validators.required],
      //   bairro:['', Validators.required],
      //   endereco:['', Validators.required],
      //   numero:[''],
      //   complemento:[''],
      //   cepEmpresa:['', Validators.required],
      //   cidadeEmpresa:['', Validators.required],
      //   estadoEmpresa:['', Validators.required],
      //   bairroEmpresa:['', Validators.required],
      //   enderecoEmpresa:['', Validators.required],
      //   numeroEmpresa:[''],
      //   complementoEmpresa:[''],
      // });
  
    }
    // public formControlValue(key:string):any {
    //   console.log(key);
    //   return this.form.controls[key].value;
    // }
  
    public changeFisicaJuridica() {
      this.tipoPessoa = this.tipoPessoa == "F" ?"J":"F";
console.log(this.tipoPessoa);
    }
}
