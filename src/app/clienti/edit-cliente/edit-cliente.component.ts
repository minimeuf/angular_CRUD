import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clienti } from 'src/app/classes/Clienti/clienti';
import { Comuni } from 'src/app/classes/comuni/comuni';
import { Sedi } from 'src/app/classes/sedi/sedi';
import { ISede } from 'src/app/intefaces/sos/generale';
import { IComuni } from 'src/app/interfaces/comuni/icomuni';
import { IClienti } from 'src/app/interfaces/iclienti';
import { ClientiService } from 'src/app/services/clienti/clienti.service';
import { ComuniService } from 'src/app/services/comuni/comuni.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit {

  edit: IClienti = new Clienti

  comuni: IComuni []=[]

  constructor( private clientiService: ClientiService, private route: ActivatedRoute, private router: Router, private comuniService:ComuniService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clientiService.getById(params['id']).subscribe( response => {
        this.edit = response
      })
    })
    this.route.params.subscribe(params => {
      this.comuniService.getAllCom().subscribe((tuttecos:any) => {
        this.comuni = tuttecos.content
      })
    })
  }

  saveEdit(edit:IClienti){

    

    this.clientiService.updateClienti(edit).subscribe( response => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Modificato con successo',
        showConfirmButton: false,
        timer: 2000
      })
      this.router.navigate(["detailsCliente",this.edit.id])
    })
  }

}
