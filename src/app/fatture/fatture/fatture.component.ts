import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFatture } from 'src/app/interfaces/fatture/ifatture';
import { FattureService } from 'src/app/services/fatture/fatture.service';

const fatNum: IFatture []=[]

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.css']
})
export class FattureComponent implements OnInit {

  //page = 1;
  //pageSize = 20;
  //collectionSize = fatNum.length;
  fatture!: IFatture [];
  totalElements!: number;
  size!: number;
  numberOfPages!: number;
  pageNumbers: number[] = [];

  constructor( private fattureService:FattureService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    {
      this.route.params.subscribe(params => {
        
        this.fattureService.getPagedFatture(params["page"]).subscribe((fatture:any) => {
          this.fatture = fatture.content
          this.totalElements = fatture.totalElements
          this.size = fatture.size
          this.numberOfPages = (fatture.totalElements / fatture.size)


        for(let i = 0; i <= this.numberOfPages && i <=12 ; i++){
            this.pageNumbers.push(i)
          }
        });
  
      })
    }
  }

  removeFattura(item: IFatture){
    this.fattureService.deleteFattura(item).
    subscribe (response => {
      let index = this.fatture.indexOf (item);
      this.fatture.splice(index, 1);
      //this.fatture = this.fatture.filter(fattura => fattura.id !== fattura.id)
    })

  }

  aggiungiFattura(item:IFatture){
    this.router.navigate(['newFatture/cliente/:id', item.id])
  }

  detailsFattura(item :IFatture){
    this.router.navigate(['detailsFatture', item.id])
  }
  modificaFattura(item :IFatture){
    this.router.navigate(['fatture/editFatture/', item.id])
  }

}
