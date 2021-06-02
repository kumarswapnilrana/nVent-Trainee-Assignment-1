import { Component, OnInit } from '@angular/core';
import { appList, toEditName } from '../AppList';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Appliance} from '../Appliance';

@Component({
  selector: 'app-edit-appliance',
  templateUrl: './edit-appliance.component.html',
  styleUrls: ['./edit-appliance.component.css']
})

export class EditApplianceComponent implements OnInit{

  editApp : Appliance = {
    name : "",
    type : "",
    desc : "",
    price : 0,
    techspec : "",
    quantity : 0
  };
  index : number = 0;

  constructor(private snackBar : MatSnackBar, private router : Router) {
  }
  ngOnInit(): void {
    this.getData( toEditName[0] );
  }

  getData(name:string){
    for(let i = 0; i < appList.length; i++){
      if (appList[i].name === name) {
        this.editApp = appList[i];
        this.index = i;
        return;
      }
    }
    this.snackBar.open("No Data Found", "Close");
    this.router.navigate(['Appliance']);
  }

  submitEdit(){
    appList[this.index].name = this.editApp.name;
    appList[this.index].type = this.editApp.type;
    appList[this.index].desc = this.editApp.desc;
    appList[this.index].price = this.editApp.price;
    appList[this.index].techspec = this.editApp.techspec;
    appList[this.index].quantity = this.editApp.quantity;

    this.snackBar.open("Saved Edit", "Close");
    this.router.navigate(['Appliance']);
  }

}
