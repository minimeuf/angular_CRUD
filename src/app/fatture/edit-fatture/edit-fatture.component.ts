import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFatture } from 'src/app/interfaces/fatture/ifatture';
import { FattureService } from 'src/app/services/fatture/fatture.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-fatture',
  templateUrl: './edit-fatture.component.html',
  styleUrls: ['./edit-fatture.component.css']
})
export class EditFattureComponent implements OnInit {

  editFatt!:IFatture
  stato=[{id:1, nome: "PAGATO"}, {id:2, nome:"NON PAGATO"}]

  constructor(private fattureService: FattureService, private route: ActivatedRoute, private router:Router ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.fattureService.getFattureById(params['id']).subscribe( response => {
        this.editFatt = response
      })
    })
  }
  saveEditFatture(editFatt:IFatture){
    this.fattureService.updateFatture(editFatt).subscribe( response => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Modificato con successo',
        showConfirmButton: false,
        timer: 2000
      })
        this.router.navigate(["detailsFatture",this.editFatt.id])
    })
  }

}
