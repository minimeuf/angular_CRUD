import { IComuni } from "../comuni/icomuni";
import { IProvince } from "../province/iprovince";

export interface ISedi {
    id:number,
    via: string,
    civico: string,
    cap:string,
    localita: string,
    comune:IComuni,
    provincia: IProvince
}
