import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IClienti } from 'src/app/interfaces/iclienti';
import { ClientiService } from 'src/app/services/clienti/clienti.service';

@Component({
  selector: 'app-details-cliente',
  templateUrl: './details-cliente.component.html',
  styleUrls: ['./details-cliente.component.css']
})
export class DetailsClienteComponent implements OnInit {

  details!: IClienti

  constructor( private clientService: ClientiService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      response => {
        this.clientService.getById(response['id']).subscribe(
          response =>{
            this.details = response;
          })
        })
  }

}
