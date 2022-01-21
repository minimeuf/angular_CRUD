import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fatture } from 'src/app/classes/fatture/fatture';
import { IFatture } from 'src/app/interfaces/fatture/ifatture';
import { StatoF } from 'src/app/interfaces/statoF/stato-f';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FattureService {

  constructor( private http:HttpClient) { }

  getAllFatture(){
    return this.http.get<IFatture[]>(environment.urlAPI + 'api/fatture')
  }
  getBiClient(id:number){
    return this.http.get<IFatture>(environment.urlAPI + `api/fatture/cliente/${id}?page=&size=20&sort=id,ASC` )
  }
  getPagedFatture(page: number){
    return this.http.get<IFatture[]>(environment.urlAPI+`api/fatture?page=${page}&size=20&sort=id,ASC`)
  }
  deleteFattura(fattura: IFatture){
    return this.http.delete(environment.urlAPI + 'api/fatture/' + fattura.id)
  }
  getFattureById(id:number) {
    return this.http.get<IFatture>(environment.urlAPI + 'api/fatture/' + id)
  }
  updateFatture(fattura:IFatture){
    return this.http.put<IFatture>(environment.urlAPI+ 'api/fatture/' +fattura.id , fattura)
  }
  addFattura(fattura:IFatture){
    return this.http.post(environment.urlAPI+'api/fatture', fattura)
  }

  
}
