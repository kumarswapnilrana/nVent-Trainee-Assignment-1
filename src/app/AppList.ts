import {Appliance} from './Appliance';

export var appList : Appliance[] = [
  {
    name : "Drills",
    type : "Utility",
    desc : "For Construction",
    price : 1000,
    techspec : "2000RPM",
    quantity : 50
  },
  {
    name : "Cables",
    type : "Thermal Insulation",
    desc : "For Industry",
    price : 500,
    techspec : "protection upto 300 degrees Celcius",
    quantity : 500
  }
];

export var toEditName : string[] = [];
