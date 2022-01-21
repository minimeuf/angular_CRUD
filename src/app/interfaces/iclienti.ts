
import { ISedi } from "./sedi/isedi";

export interface IClienti         {
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
    indirizzoSedeOperativa: ISedi,
    indirizzoSedeLegale: ISedi,
    dataInserimento: string,
    dataUltimoContatto: string,
    fatturatoAnnuale: number
}