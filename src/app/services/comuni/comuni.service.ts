import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IComuni } from 'src/app/interfaces/comuni/icomuni';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComuniService {

  constructor( private http:HttpClient) { }

  getAllCom(){
    return this.http.get<IComuni[]>(environment.urlAPI + 'api/comuni')
  }

  getPagedComuni(page: number){
    return this.http.get<IComuni[]>(environment.urlAPI+`api/comuni?page=${page}&size=20&sort=id,ASC`)
  }

  newComune(comune:IComuni){
    return this.http.post(environment.urlAPI+ 'api/comuni', comune)
  }

  deleteComune(comune: IComuni){
    return this.http.delete(environment.urlAPI + 'api/comuni/' + comune.id)
  }

  editComune(comune:IComuni){
    return this.http.put(environment.urlAPI+'api/comuni/'+comune.id, comune)
  }

  getComById(id:number){
    return this.http.get<IComuni>(environment.urlAPI+'api/comuni/'+id)
  }
  updateComuni(comuni:IComuni){
    return this.http.put<IComuni>(environment.urlAPI+ 'api/comuni/' +comuni.id , comuni)
  }
}
