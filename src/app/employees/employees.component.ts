import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private dataServe : DataService , private router: Router) { }
  empCount : Number = 0;
  employees = [ ]
    
  ngOnInit() {
    this.employees = this.dataServe.getData();
    this.empCount = this.employees.length;
   
  }
  clicked(ind){
    console.log(ind+1);
    this.dataServe.setEditData(ind+1);
  }
  delete(ind){
    for(let emp of this.employees){
      if(parseInt(emp['id'])== (ind+1)){
        this.employees.splice(ind,1);
        break;
      }
    }
     for(let emp of this.employees){
      if(emp['id'] > ind){
        emp['id'] = emp['id']-1; 
      }
    }
      this.empCount = this.employees.length;
  }
  det(i){
    let model:any;
    model["id"] = i;
    for (let detailEmp of this.employees){
      if(detailEmp["id"] == i){
        model = detailEmp;
      }
    }
    console.log(model);
  }
}