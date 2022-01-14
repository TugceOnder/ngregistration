import { User } from './../user';
import { RegistrationService } from './../registration.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user = new User();
 msg='';
  constructor(private _service : RegistrationService, private _router : Router) { }

  ngOnInit() {
  }
  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe (

      data => {

        console.log("response recieved");
        this._router.navigate(['/loginsuccess'])
       },
       
      error => {
        
        console.log("response recieved");
       this. msg="Bad credential please email id and password";
      }
    )
    
  
    

  }

  gotoregistration(){
    this._router.navigate(['/registration']);
  }

}
