import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from  'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RegistroComponent } from './registro/registro.component';
import { ComponentesModule } from '../componentes/componentes.module';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentesModule
  ],
  exports: [
    HomeComponent,
    LoginComponent,
    RegistroComponent
  ]
})
export class PagesModule { }
