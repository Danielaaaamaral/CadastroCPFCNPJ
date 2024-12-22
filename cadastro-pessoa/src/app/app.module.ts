import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './shared/components/menu/menu.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { InputCpfComponent } from './shared/components/input-cpf/input-cpf.component';
import { CadastroPessoaJuridicaComponent } from './cadastro-pessoa-juridica/cadastro-pessoa-juridica.component';
import { InputCnpjComponent } from './shared/components/input-cnpj/input-cnpj.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    MenuComponent,
    CadastroPessoaComponent,
    InputCpfComponent,
    CadastroPessoaJuridicaComponent,
    InputCnpjComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
