import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IClienti } from 'src/app/interfaces/iclienti';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {

  constructor(private http:HttpClient) { }

  getAllClienti(){
    return this.http.get<IClienti[]>(environment.urlAPI + 'api/clienti')
  }
  
  getPagedClienti(page: number){
    return this.http.get<IClienti[]>(environment.urlAPI+`api/clienti?page=${page}&size=20&sort=id,ASC`)
  }

  newCliente(cliente:IClienti){
    return this.http.post(environment.urlAPI+'api/clienti', cliente)
  }

  deleteCliente(cliente: IClienti){
    return this.http.delete(environment.urlAPI + 'api/clienti/' + cliente.id)
  }

  getById(id:number) {
    return this.http.get<IClienti>(environment.urlAPI + 'api/clienti/' + id)
  }
  updateClienti(clienti:IClienti){
    return this.http.put<IClienti>(environment.urlAPI+ 'api/clienti/' +clienti.id , clienti)
  }
}
