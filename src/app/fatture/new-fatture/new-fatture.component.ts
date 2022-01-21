import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clienti } from 'src/app/classes/Clienti/clienti';
import { Fatture } from 'src/app/classes/fatture/fatture';
import { IFatture } from 'src/app/interfaces/fatture/ifatture';
import { IClienti } from 'src/app/interfaces/iclienti';
import { ClientiService } from 'src/app/services/clienti/clienti.service';
import { FattureService } from 'src/app/services/fatture/fatture.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-fatture',
  templateUrl: './new-fatture.component.html',
  styleUrls: ['./new-fatture.component.css']
})
export class NewFattureComponent implements OnInit {

  stato=[{id:1, nome: "PAGATO"}, {id:2, nome:"NON PAGATO"}]
  newFattura: Fatture = new Fatture
  newCliente: Clienti = new Clienti
  clienti: IClienti []=[]
  totalElements!: number;
  size!: number;
  numberOfPages!: number;
  pageNumbers: number []=[]; 

  constructor( private fattureService: FattureService, private route:ActivatedRoute, private clientiService:ClientiService, private router:Router) { }

  ngOnInit(): void {
    {
      this.route.params.subscribe(params => {
        
        this.clientiService.getAllClienti().subscribe((clienti:any) => {
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

  CreateNewFattura(newFattura: Fatture){

    this.newCliente = this.newFattura.cliente
    newFattura.cliente = this.newFattura.cliente
    
    this.fattureService.addFattura(newFattura).
    subscribe(response => Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Nuova fattura aggiunta',
      showConfirmButton: false,
      timer: 2000
    })
    )
    this.router.navigate(["fatture"])
  };

}
