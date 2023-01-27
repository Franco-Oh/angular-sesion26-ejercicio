import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UsersDataService } from 'src/app/services/users-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin!:FormGroup;

  data:any[] = [];

  msgCorreoInvalido = false;

  constructor( private usersData:UsersDataService, private router:Router, private formBuilder: FormBuilder ){
    this.formLogin = new FormGroup({
      user: new FormControl(),
      email: new FormControl()
    })
  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      user:['', 
        [
          Validators.required,
          Validators.minLength(4)
        ]
      ],
      email:['', 
        [
          Validators.required,
          Validators.email
        ]
      ]
    });
  }

  onSubmit(){
    this.usersData.login(this.formLogin.get('user')?.value, this.formLogin.get('email')?.value).subscribe(usuario => {
      if (usuario){
        this.router.navigate(['/home'])
      } else {
        this.msgCorreoInvalido = true;
      }
    })
  }

}
