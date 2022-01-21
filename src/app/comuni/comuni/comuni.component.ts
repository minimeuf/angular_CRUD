import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IComuni } from 'src/app/interfaces/comuni/icomuni';
import { ComuniService } from 'src/app/services/comuni/comuni.service';

const comNum: IComuni []=[]

@Component({
  selector: 'app-comuni',
  templateUrl: './comuni.component.html',
  styleUrls: ['./comuni.component.css']
})
export class ComuniComponent implements OnInit {

  page = 1;
  pageSize = 20;
  collectionSize = comNum.length;
  comuni!: IComuni[];
  totalElements!: number;
  size!: number;
  numberOfPages!: number;
  pageNumbers: number[] = [];

  constructor( private comuniService:ComuniService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    {
      this.route.params.subscribe(params => {
        
        this.comuniService.getPagedComuni(params["page"]).subscribe((comuni:any) => {
          this.comuni = comuni.content
          this.totalElements = comuni.totalElements
          this.size = comuni.size
          this.numberOfPages = comuni.totalElements / comuni.size
        for(let i = 0; i <= this.numberOfPages; i++){
            console.log(i);
            this.pageNumbers.push(i);
          }
        });
  
      })
    }
  }
  removeCom (item: IComuni){
    this.comuniService.deleteComune(item).
    subscribe (response => {
      let index = this.comuni.indexOf (item);
      this.comuni.splice(index, 1);
      //this.fatture = this.fatture.filter(fattura => fattura.id !== fattura.id)
    })
  }
  modificaCom(item: IComuni){
    this.router.navigate(['comuni/editComuni/', item.id] )
  }


}
