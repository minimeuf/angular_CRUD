import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Province } from 'src/app/classes/province/province';
import { IProvince } from 'src/app/interfaces/province/iprovince';
import { ProvinceService } from 'src/app/services/province/province.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-province',
  templateUrl: './new-province.component.html',
  styleUrls: ['./new-province.component.css']
})
export class NewProvinceComponent implements OnInit {

  newProv: IProvince = new Province();

  constructor(private provinceService: ProvinceService, private router:Router) { }

  ngOnInit(): void {
  }

  CreateNewProvincia(newProv: IProvince){
    this.provinceService.newProv(newProv).
    subscribe(response => Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Nuova provincia inserita',
      showConfirmButton: false,
      timer: 2000
    })
    )
    this.router.navigate(["province"])
  }

}
