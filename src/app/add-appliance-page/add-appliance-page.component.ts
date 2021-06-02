import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Appliance } from '../Appliance';
import { appList } from '../AppList';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-appliance-page',
  templateUrl: './add-appliance-page.component.html',
  styleUrls: ['./add-appliance-page.component.css']
})
export class AddAppliancePageComponent implements OnInit {

  constructor(private snackBar : MatSnackBar, private router : Router) { }

  ngOnInit(): void {
  }
  hide = true;

  newApp : Appliance = {
    name : "",
    type : "",
    desc : "",
    price : 0,
    techspec : "",
    quantity : 0
  };

  addApp(){
    appList.push(this.newApp);
    this.snackBar.open("Added Appliance to List", "Close");
    this.router.navigate(['Appliance']);
  }

}
