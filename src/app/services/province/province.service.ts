import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProvince } from 'src/app/interfaces/province/iprovince';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  constructor(private http:HttpClient) { }

  getAllProv(){
    return this.http.get<IProvince[]>(environment.urlAPI + 'api/province')
  }

  getPagedProv(page: number){
    return this.http.get<IProvince[]>(environment.urlAPI+`api/province?page=${page}&size=20&sort=id,ASC`)
  }

  newProv(provincia:IProvince){
    return this.http.post(environment.urlAPI+'api/province', provincia)
  }
  deleteProv(provincia: IProvince){
    return this.http.delete(environment.urlAPI + 'api/province/' + provincia.id)
  }
  editProv(provincia:IProvince){
    return this.http.put(environment.urlAPI+'api/provincia/'+provincia.id, provincia)
  }

  getProvById(id:number){
    return this.http.get<IProvince>(environment.urlAPI+'api/province/'+id)
  }
  updateProv(province:IProvince){
    return this.http.put<IProvince>(environment.urlAPI+ 'api/province/' +province.id , province)
  }
}
