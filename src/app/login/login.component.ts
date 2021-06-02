import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private snackbar : MatSnackBar, private router : Router) { }

  ngOnInit(): void {
  }
  hide = true;
  username: string ="";
  password: string ="";

  login(){
    if(this.username !== "" || this.password !== ""){
      this.router.navigate(['Appliance']);
    }
    else{
      this.snackbar.open("Empty Fields!", "Close");
    }
  }
}
