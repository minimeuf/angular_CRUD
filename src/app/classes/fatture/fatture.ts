import { IFatture } from "src/app/interfaces/fatture/ifatture";
import { Clienti } from "../Clienti/clienti";
import { StatoF } from "../statoF/stato-f";

export class Fatture implements IFatture{
    id!: number;
    data!: string;
    numero!: string;
    anno!: string;
    importo!: string;
    stato: StatoF = new StatoF;
    cliente: Clienti = new Clienti;
}
