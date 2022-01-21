import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comuni } from 'src/app/classes/comuni/comuni';
import { IComuni } from 'src/app/interfaces/comuni/icomuni';
import { IProvince } from 'src/app/interfaces/province/iprovince';
import { ComuniService } from 'src/app/services/comuni/comuni.service';
import { ProvinceService } from 'src/app/services/province/province.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-comuni',
  templateUrl: './new-comuni.component.html',
  styleUrls: ['./new-comuni.component.css']
})
export class NewComuniComponent implements OnInit {

  newCom: IComuni = new Comuni();
  province:IProvince []=[]

  constructor(private comuniService:ComuniService, private route:ActivatedRoute, private router:Router, private  provinceService: ProvinceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.provinceService.getAllProv().subscribe((tuttecos:any) => {
        this.province = tuttecos.content
      })
    })

}

  CreateNewComune(newCom: IComuni){
    this.comuniService.newComune(newCom).
    subscribe(response => Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Nuovo comune aggiunto',
      showConfirmButton: false,
      timer: 2000
    })
    )
    this.router.navigate(["comuni"])
  }

}
