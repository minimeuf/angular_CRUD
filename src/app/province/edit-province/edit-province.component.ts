import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProvince } from 'src/app/interfaces/province/iprovince';
import { ProvinceService } from 'src/app/services/province/province.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-province',
  templateUrl: './edit-province.component.html',
  styleUrls: ['./edit-province.component.css']
})
export class EditProvinceComponent implements OnInit {

  selectProv!: IProvince

  constructor( private provinceService:ProvinceService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe (response =>{
      this.provinceService.getProvById(response ['id']).subscribe(
        response => 
        this.selectProv = response)

        })
  }
  editProv(selectProv:IProvince){
    this.provinceService.updateProv(selectProv).subscribe( response => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Modificato con successo',
        showConfirmButton: false,
        timer: 2000
      })
      this.router.navigate(["province"])
    })
  }  

}
