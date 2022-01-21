import { IClienti} from "src/app/interfaces/iclienti";
import { Sedi } from "../sedi/sedi";
export class Clienti implements IClienti {

        id!: number;
        ragioneSociale!: string;
        partitaIva!: string;
        tipoCliente!: string;
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
    }