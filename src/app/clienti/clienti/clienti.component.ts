import { Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import { IClienti } from 'src/app/interfaces/iclienti';
import { ClientiService } from 'src/app/services/clienti/clienti.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ComuniService } from 'src/app/services/comuni/comuni.service';


const clNum: IClienti []=[]



@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css']
})

//@Pipe:({'nome'})

export class ClientiComponent implements OnInit { //implements PipeTras

  //transform(value: any, input: string) {
      //if (input) {
        //input = input.toLowerCase();
        //return value.filter (function (nomeContatto: any ){
          //return nomeContatto.toLowerCase().indexOfInput(input) > -1;
        //})
      //return value;
      //}
  //}

  
  page = 1;
  pageSize = 20;
  collectionSize = clNum.length;
  clienti!: IClienti[];
  totalElements!: number;
  size!: number;
  numberOfPages!: number;
  pageNumbers: number[] = [];
  FiltroItems!:IClienti;

  constructor(private clientiService: ClientiService, private router:Router, private route:ActivatedRoute, private comuniService:ComuniService) {}
  

  ngOnInit(): void {
    {
      this.route.params.subscribe(params => {
        
        this.clientiService.getPagedClienti(params["page"]).subscribe((clienti:any) => {
          this.clienti = clienti.content
          this.totalElements = clienti.totalElements
          this.size = clienti.size
          this.numberOfPages = clienti.totalElements / clienti.size
        for(let i = 0; i <= this.numberOfPages; i++){
            console.log(i);
            this.pageNumbers.push(i);
          }
        });
  
      })

    }
  }

  

  remove(item: IClienti){
    this.clientiService.deleteCliente(item).
    subscribe (response => {
      let index = this.clienti.indexOf (item);
      this.clienti.splice(index, 1);
      //this.fatture = this.fatture.filter(fattura => fattura.id !== fattura.id)
    })
  }
  
  details(item :IClienti){
    this.router.navigate(['detailsCliente/', item.id])
  }

  modifica(item :IClienti){
    this.router.navigate(['editCliente/', item.id])
  }

}


