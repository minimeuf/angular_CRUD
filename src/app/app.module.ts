import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { ClientiComponent } from './clienti/clienti/clienti.component';
import { AuthInterceptor } from './interceptor/auth/aentication/auth.interceptor';
import { NewClienteComponent } from './clienti/new-cliente/new-cliente.component';
import { EditClienteComponent } from './clienti/edit-cliente/edit-cliente.component';
import { DetailsClienteComponent } from './clienti/details-cliente/details-cliente.component';
import { ProvinceComponent } from './province/province/province.component';
import { NewProvinceComponent } from './province/new-province/new-province.component';
import { EditProvinceComponent } from './province/edit-province/edit-province.component';
import { ComuniComponent } from './comuni/comuni/comuni.component';
import { NewComuniComponent } from './comuni/new-comuni/new-comuni.component';
import { EditComuniComponent } from './comuni/edit-comuni/edit-comuni.component';
import { FattureComponent } from './fatture/fatture/fatture.component';
import { NewFattureComponent } from './fatture/new-fatture/new-fatture.component';
import { DetailsFattureComponent } from './fatture/details-fatture/details-fatture.component';
import { EditFattureComponent } from './fatture/edit-fatture/edit-fatture.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ClientiComponent,
    NewClienteComponent,
    EditClienteComponent,
    DetailsClienteComponent,
    ProvinceComponent,
    NewProvinceComponent,
    EditProvinceComponent,
    ComuniComponent,
    NewComuniComponent,
    EditComuniComponent,
    FattureComponent,
    NewFattureComponent,
    DetailsFattureComponent,
    EditFattureComponent,
    HomeComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AppRoutingModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
