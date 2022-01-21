import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFatture } from 'src/app/interfaces/fatture/ifatture';
import { FattureService } from 'src/app/services/fatture/fatture.service';

@Component({
  selector: 'app-details-fatture',
  templateUrl: './details-fatture.component.html',
  styleUrls: ['./details-fatture.component.css']
})
export class DetailsFattureComponent implements OnInit {

  detFattura!: IFatture

  constructor( private route: ActivatedRoute, private fattureService: FattureService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      response => {
        this.fattureService.getFattureById(response['id']).subscribe(
          response =>{
            this.detFattura = response;
          })
        })
  }

}
