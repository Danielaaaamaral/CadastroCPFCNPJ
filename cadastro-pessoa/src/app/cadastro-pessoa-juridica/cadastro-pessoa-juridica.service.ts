import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import PessoaJuridica from "../shared/models/PessoaJuridica.model";


@Injectable({
    providedIn: 'root'
  })



  export class CadastroPessoaJuridicaService{
    constructor(private readonly http: HttpClient) { 
        }

    criar(pessoa: PessoaJuridica): Observable<PessoaJuridica> {
            return this.http.post<PessoaJuridica>(`${environment.linkApi}juridica`, pessoa);
          }
    listar(): Observable<PessoaJuridica[]> {
            return this.http.get<PessoaJuridica[]>(`${environment.linkApi}juridica`);
          }
    obterPorId(id: number): Observable<PessoaJuridica> {
            const url = `${environment.linkApi}juridica/${id}`;
            return this.http.get<PessoaJuridica>(url);
          }
    atualizar(id: number, pessoa: PessoaJuridica): Observable<PessoaJuridica> {
            const url = `${environment.linkApi}juridica/${id}`;
            return this.http.put<PessoaJuridica>(url, pessoa);
          }
    excluir(id: number): Observable<void> {
            const url = `${environment.linkApi}juridica/${id}`;
            return this.http.delete<void>(url);
          }

  }