import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comuni } from 'src/app/classes/comuni/comuni';
import { IComuni } from 'src/app/interfaces/comuni/icomuni';
import { IProvince } from 'src/app/interfaces/province/iprovince';
import { ComuniService } from 'src/app/services/comuni/comuni.service';
import { ProvinceService } from 'src/app/services/province/province.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-comuni',
  templateUrl: './edit-comuni.component.html',
  styleUrls: ['./edit-comuni.component.css']
})
export class EditComuniComponent implements OnInit {

  SelectComune: IComuni = new Comuni

  province: IProvince []=[]
 



  constructor(private route: ActivatedRoute,  private router: Router, private comuniService: ComuniService, private provinceService:ProvinceService,) { }

  ngOnInit(): void {
    this.route.params.subscribe (response =>{
      this.comuniService.getComById(response ['id']).subscribe(
        response => 
        this.SelectComune = response)

        })
        
          this.provinceService.getAllProv().subscribe((tuttecos:any) => {
            this.province = tuttecos.content
          })
        }

    editCom(SelectComune:IComuni){
      this.comuniService.updateComuni(SelectComune).subscribe( response => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Modificato con successo',
          showConfirmButton: false,
          timer: 2000
        })
        this.router.navigate(["comuni"])
      })
    }  
}
