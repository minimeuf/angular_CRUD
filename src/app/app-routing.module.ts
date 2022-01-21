import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientiComponent } from './clienti/clienti/clienti.component';
import { DetailsClienteComponent } from './clienti/details-cliente/details-cliente.component';
import { EditClienteComponent } from './clienti/edit-cliente/edit-cliente.component';
import { NewClienteComponent } from './clienti/new-cliente/new-cliente.component';
import { ComuniComponent } from './comuni/comuni/comuni.component';
import { EditComuniComponent } from './comuni/edit-comuni/edit-comuni.component';
import { NewComuniComponent } from './comuni/new-comuni/new-comuni.component';
import { DetailsFattureComponent } from './fatture/details-fatture/details-fatture.component';
import { EditFattureComponent } from './fatture/edit-fatture/edit-fatture.component';
import { FattureComponent } from './fatture/fatture/fatture.component';
import { NewFattureComponent } from './fatture/new-fatture/new-fatture.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EditProvinceComponent } from './province/edit-province/edit-province.component';
import { NewProvinceComponent } from './province/new-province/new-province.component';
import { ProvinceComponent } from './province/province/province.component';
import { LoginGuard } from './guard/login.guard';

const routes: Routes = [
  { path:'',
  component: LoginComponent,
  },
  { path:'home',
  component: HomeComponent,
  canActivate: [LoginGuard]
  },
  {
    path:"clienti",
    component: ClientiComponent,
    canActivate: [LoginGuard]
  },
  {
    path:"clienti/page/:page",
    component: ClientiComponent,
    canActivate: [LoginGuard]
  },
  {
    path:"newCliente",
    component: NewClienteComponent,
    canActivate: [LoginGuard]
  },
  {
    path:"editCliente",
    component: EditClienteComponent,
    canActivate: [LoginGuard]
  },
  {
    path:"editCliente/:id",
    component: EditClienteComponent,
    canActivate: [LoginGuard]
  },
  {
    path:"detailsCliente",
    component: DetailsClienteComponent,
    canActivate: [LoginGuard]
  },
  {
    path:"detailsCliente/:id",
    component: DetailsClienteComponent,
    canActivate: [LoginGuard]
  },



  {
    path:"province",
    component: ProvinceComponent,
    canActivate: [LoginGuard]
  },
  {
    path:"province/page/:page",
    component: ProvinceComponent,
    canActivate: [LoginGuard]
  },
  {
    path:"newProvince",
    component: NewProvinceComponent,
    canActivate: [LoginGuard]
  },
  {
    path:"province/editProvince",
    component: EditProvinceComponent,
    canActivate: [LoginGuard]
  },
  {
    path:"province/editProvince/:id",
    component: EditProvinceComponent,
    canActivate: [LoginGuard]
  },



  {
    path:"comuni",
    component: ComuniComponent,
    canActivate: [LoginGuard]
  },
  {
    path:"comuni/page/:page",
    component: ComuniComponent,
    canActivate: [LoginGuard]
  },
  {
    path:"newComuni",
    component: NewComuniComponent,
    canActivate: [LoginGuard]
  },
  {
    path:"comuni/editComuni",
    component: EditComuniComponent,
    canActivate: [LoginGuard]
  },
  {
    path:"comuni/editComuni/:id",
    component: EditComuniComponent,
    canActivate: [LoginGuard]
  },



  {
    path:"fatture",
    component: FattureComponent,
    canActivate: [LoginGuard]
  },
  {
    path:"fatture/page/:page",
    component: FattureComponent,
    canActivate: [LoginGuard]
  },
  {
    path:"newFatture",
    component: NewFattureComponent,
    canActivate: [LoginGuard]
  },
  {
    path:"detailsFatture/:id",
    component: DetailsFattureComponent,
    canActivate: [LoginGuard]
  },
  {
    path:"fatture/editFatture",
    component: EditFattureComponent,
    canActivate: [LoginGuard]
  },
  {
    path:"fatture/editFatture/:id",
    component: EditFattureComponent,
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
