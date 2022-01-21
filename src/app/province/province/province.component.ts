import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProvince } from 'src/app/interfaces/province/iprovince';
import { ProvinceService } from 'src/app/services/province/province.service';

const provNum: IProvince []=[]

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.css']
})
export class ProvinceComponent implements OnInit {

  page = 1;
  pageSize = 20;
  collectionSize = provNum.length;
  prov!: IProvince[];
  totalElements!: number;
  size!: number;
  numberOfPages!: number;
  pageNumbers: number[] = [];

  constructor(private provinceService:ProvinceService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    {
      this.route.params.subscribe(params => {
        
        this.provinceService.getPagedProv(params["page"]).subscribe((prov:any) => {
          this.prov = prov.content
          this.totalElements = prov.totalElements
          this.size = prov.size
          this.numberOfPages = prov.totalElements / prov.size
        for(let i = 0; i <= this.numberOfPages; i++){
            console.log(i);
            this.pageNumbers.push(i);
          }
        });
  
      })
    }
  }

  removeProv(item :IProvince){
    this.provinceService.deleteProv(item).
    subscribe (response => {
      let index = this.prov.indexOf (item);
      this.prov.splice(index, 1);
      //this.fatture = this.fatture.filter(fattura => fattura.id !== fattura.id)
    })
  }
  modificaProv(item: IProvince){
    this.router.navigate(['province/editProvince/', item.id] )
  }
}
