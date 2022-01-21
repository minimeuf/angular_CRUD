import { IClienti } from "../iclienti";
import { StatoF } from "../statoF/stato-f";

export interface IFatture {
    id:number,
    data:string,
    numero:string,
    anno:string,
    importo:string,
    stato:StatoF,
    cliente: IClienti
}
