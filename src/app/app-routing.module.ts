import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuardGuard } from 'src/app/guards/auth-guard.guard';
import { LoggedGuard } from 'src/app/guards/logged.guard';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {path:'home', component: HomeComponent, canActivate:[AuthGuardGuard]},
  {path:'login', component: LoginComponent, canActivate:[LoggedGuard]},
  {path:'registro', component: RegistroComponent},
  {path:'**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
