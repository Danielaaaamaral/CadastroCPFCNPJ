import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class DadosPessoaService {

    public retornaGrauInstrucao(): string[] {
        return ['DOUTORADO', 'ENSINO FUNDAMENTAL', 'ENSINO MÉDIO', 'ENSINO SUPERIOR', 'MESTRADO', 'PÓS GRADUADO'];
      }
      public retornaEstados(): string[] {
        return ['Acre','Alagoas', 'Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espirito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernanbumco','Piauí','Rio de Janeiro'];
      }
  }