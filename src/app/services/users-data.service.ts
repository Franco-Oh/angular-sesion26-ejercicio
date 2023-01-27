import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { User } from '../interfaces/user-interface';


@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  urlAPI="https://jsonplaceholder.typicode.com/users/";

  constructor(private http:HttpClient) {
    console.log('Base de datos activada!')
  }

  getUser(index: string):Observable<User>{
    return this.http.get<User>(`${this.urlAPI}${index}`);
  }
  getUsersData():Observable<User[]>{
    return this.http.get<User[]>(this.urlAPI);
  }

  getUserByUsuernameAndEmail(username:string, email:string):Observable<User | undefined>{
    return this.getUsersData().pipe(map(users => {
      const user = users.find(user => user.username === username && user.email === email)
      return user
    }))
  }

  login(username:string, password:string){
    return this.getUserByUsuernameAndEmail(username, password).pipe(tap(usuario => {
      if (usuario){
        localStorage.setItem('user', JSON.stringify(usuario))
      }
    }))
  }

  logout(){
    localStorage.removeItem('user')
  }
}
