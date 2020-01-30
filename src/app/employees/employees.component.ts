import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private dataServe : DataService , private router : Router) { }
  empCount : Number = 0;
  employees = [ ]
    
  ngOnInit() {
    this.employees = this.dataServe.getData();
    this.empCount = this.employees.length;
   
  }
  clicked(ind){
    console.log(ind);
    this.dataServe.setEditData(ind);
  }
  delete(ind){
    for(let emp of this.employees){
      if(parseInt(emp['id'])== (ind)){
        this.employees.splice(ind-1,1);
        break;
      }
    }
    //  for(let emp of this.employees){
    //   if(emp['id'] > ind){
    //     emp['id'] = emp['id']-1; 
    //   }
    // }
    this.searchString = "";
      this.empCount = this.employees.length;
  }
  det(i){
    let a =  {};
    for (let detailEmp of this.employees){
      if(detailEmp['id'] == i){
        a = detailEmp;
      }
    }
    
    this.dataServe.setDetails(a);
  }
}