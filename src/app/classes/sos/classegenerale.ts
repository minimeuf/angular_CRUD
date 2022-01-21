import { Comuni } from "../comuni/comuni";
import { Province } from "../province/province";
import { Sedi } from "../sedi/sedi";

export class Classegenerale {
    id!: number;
    ragioneSociale!:string;
    partitaIva!: string;tipoCliente!: string;
    email!: string;
    pec!: string;
    telefono!: string;
    nomeContatto!: string;
    cognomeContatto!: string;
    telefonoContatto!: string;
    emailContatto!: string;
        indirizzoSedeOperativa: Sedi = new Sedi;
        indirizzoSedeLegale: Sedi = new Sedi;
        dataInserimento!: string;
        dataUltimoContatto!: string;
        fatturatoAnnuale!: number;
        comune: Comuni = new Comuni;
        provincia: Province = new Province
    }
