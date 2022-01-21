import { ISedi } from "src/app/interfaces/sedi/isedi";
import { Comuni } from "../comuni/comuni";
import { Province } from "../province/province";

export class Sedi implements ISedi{
    id!:number;
    via!: string;
    civico!: string;
    cap!:string;
    localita!: string;
    comune!:Comuni;
    provincia!: Province;
}
