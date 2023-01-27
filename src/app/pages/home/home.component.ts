import { Component, OnInit } from '@angular/core';
import { UsersDataService } from 'src/app/services/users-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data!:any;

  constructor(private usersData:UsersDataService, private router:Router) { }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('user')!)
    // this.data = Array() 
    console.log(this.data)

  }

  logout(){
    this.usersData.logout();
    this.router.navigate(['/login'])
  }
}
