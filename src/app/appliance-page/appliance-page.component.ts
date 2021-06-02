import {Component} from '@angular/core';
import {Sort} from '@angular/material/sort';
import {appList, toEditName} from '../AppList';
import {Appliance} from '../Appliance';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

@Component({
  selector: 'app-appliance-page',
  templateUrl: './appliance-page.component.html',
  styleUrls: ['./appliance-page.component.css']
})
export class AppliancePageComponent {

  // applist = appList; //Notice all lower case in native variable vs camelCase in imported variable
  sortedData : Appliance[];
  displayedColumns: string[] = ['name', 'type', 'desc', 'price', 'techspec', 'quantity'];
  message :string;

  constructor(private snackBar : MatSnackBar, private router : Router) {
    this.sortedData = appList.slice();
    this.message = "Deleted Appliance: ";
  }

  sortData(sort: Sort){
    const data = appList.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'type': return compare(a.type, b.type, isAsc);
        case 'price': return compare(a.price, b.price, isAsc);
        case 'desc': return compare(a.desc, b.desc, isAsc);
        case 'techspec': return compare(a.techspec, b.techspec, isAsc);
        case 'quantity': return compare(a.quantity, b.quantity, isAsc);
        default: return 0;
      }
    });
  }

  deleteApp(name : string){
    for(let i=0; i<this.sortedData.length; i++){
      if (this.sortedData[i].name === name) {
        this.sortedData.splice(i,1);
        this.snackBar.open(this.message.concat(name), "Close");
        return;
      }
    }
    this.snackBar.open("Does not exist any longer!");
  }

  editApp(name : string){
    toEditName.push(name);      //Solution not optimised
    this.router.navigate(['EditAppliance']);
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
