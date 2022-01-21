import { IComuni } from "src/app/interfaces/comuni/icomuni";
import { IProvince } from "src/app/interfaces/province/iprovince";

export interface Generale {
    id?: number,
    ragioneSociale: string,
    partitaIva: string,
    tipoCliente: string,
    email: string,
    pec: string,
    telefono: string,
    nomeContatto: string,
    cognomeContatto: string,
    telefonoContatto: string,
    emailContatto: string,
    indirizzoSedeOperativa: ISede,
    indirizzoSedeLegale: ISede,
    dataInserimento: string,
    dataUltimoContatto: string,
    fatturatoAnnuale: number,
    comune: IC,
    provincia: IP
}
export interface ISede {
    id:number,
    via: string,
    civico: string,
    cap:string,
    localita: string,
    comune:IC,
    provincia: IP
}
export interface IC {
    id: number,
    nome: string,
    provincia:IP
}
export interface IP {
    id: number,
    nome: string,
    sigla: string
}
