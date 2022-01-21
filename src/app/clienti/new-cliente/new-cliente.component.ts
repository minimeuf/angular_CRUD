import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IClienti } from 'src/app/interfaces/iclienti';
import { Clienti } from 'src/app/classes/Clienti/clienti';
import { ClientiService } from 'src/app/services/clienti/clienti.service';
import { Sedi } from 'src/app/classes/sedi/sedi';
import { IComuni } from 'src/app/interfaces/comuni/icomuni';
import { Comuni } from 'src/app/classes/comuni/comuni';
import { ISedi } from 'src/app/interfaces/sedi/isedi';
import Swal from 'sweetalert2';
import { ComuniService } from 'src/app/services/comuni/comuni.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-cliente',
  templateUrl: './new-cliente.component.html',
  styleUrls: ['./new-cliente.component.css']
})
export class NewClienteComponent implements OnInit {

  newCliente: IClienti = new Clienti();
  newSedeLg: ISedi = new Sedi();
  newSedeOp: ISedi = new Sedi();
  newComune: IComuni = new Comuni();

  comuni: IComuni []=[]
  


  //MOSTRO SEDI
  mostra:boolean=false
  mostraLegale:boolean=false

  constructor( private clientiService: ClientiService, private comuniService:ComuniService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.comuniService.getAllCom().subscribe((tuttecos:any) => {
        this.comuni = tuttecos.content
      })
    })
  }

  CreateNewCliente(newCl: IClienti){


    this.newComune = this.newSedeLg.comune
    newCl.indirizzoSedeLegale = this.newSedeLg

    this.newComune = this.newSedeOp.comune
    newCl.indirizzoSedeOperativa = this.newSedeOp
    
    this.clientiService.newCliente(newCl).
    subscribe(response => Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Nuovo cliente aggiunto',
      showConfirmButton: false,
      timer: 4000
      })
    )
    this.router.navigate(["clienti"])
  };

  sedeOperativa(){
    if(this.mostra == false)
      this.mostra = true
    else
      this.mostra = false

  }
  sedeLegale(){
    if(this.mostraLegale == false)
      this.mostraLegale = true
    else
      this.mostraLegale = false

  }

}
