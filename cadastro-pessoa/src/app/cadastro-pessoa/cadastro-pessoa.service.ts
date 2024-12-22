import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import PessoaFisica from "../shared/models/PessoaFisica.model";


@Injectable({
    providedIn: 'root'
  })


  export class CadastroPessoaService{
    constructor(private readonly http: HttpClient) { 
        }

    criar(pessoa: PessoaFisica): Observable<PessoaFisica> {
            return this.http.post<PessoaFisica>(`${environment.linkApi}fisica`, pessoa);
          }
    listar(): Observable<PessoaFisica[]> {
            return this.http.get<PessoaFisica[]>(`${environment.linkApi}fisica`);
          }
    obterPorId(id: number): Observable<PessoaFisica> {
            const url = `${environment.linkApi}fisica/${id}`;
            return this.http.get<PessoaFisica>(url);
          }
    atualizar(id: number, pessoa: PessoaFisica): Observable<PessoaFisica> {
            const url = `${environment.linkApi}fisica/${id}`;
            return this.http.put<PessoaFisica>(url, pessoa);
          }
    excluir(id: number): Observable<void> {
            const url = `${environment.linkApi}fisica/${id}`;
            return this.http.delete<void>(url);
          }

  }