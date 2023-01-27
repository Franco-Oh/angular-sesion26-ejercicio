import { Component, OnInit } from '@angular/core';
import { UsersDataService } from 'src/app/services/users-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  data:any[] = [];

  constructor(private usersData:UsersDataService, private router:Router){
  }
  ngOnInit(): void {
    this.usersData.getUsersData().subscribe(user=> {
      this.data = user
      console.log(this.data)
    })
  }

}
