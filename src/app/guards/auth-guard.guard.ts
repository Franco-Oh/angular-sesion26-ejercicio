import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const userOn = localStorage.getItem('user')
      if (userOn){
        console.log('Puedes pasar')
        return true;
      } else {
        alert('Tienes que loguearte primero.')
        this.router.navigate(['/login'])
        return false        
      }
  }
  
}


