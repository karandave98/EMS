import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router }  from '@angular/router';
import { HttpClient } from '@angular/common/http';

export interface Employee {
  id: number;
  name: string;
  location:string;
  email:string;
  mobile:string;
}

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent  {
 
  constructor(private dataServe : DataService , private router : Router,private http: HttpClient) { }
  empCount : Number = 0;
  public employees:any[] = []; 
 
  ngOnInit() {
    this.dataServe.getEmp().subscribe((data : any[])=>{
        // console.log(data);
        this.employees = data;
        
        this.empCount = this.employees.length;
    });
        // this.employees = this.dataServe.getData();
   
    // this.empCount = this.dataServe.getLength(); 
  }
  
  clicked(ind){
    //console.log(ind);
    this.dataServe.setEditData(ind);
  }
  delete(ind){
    for(let emp of this.employees){
      if((emp.id)== (ind)){
        this.employees.splice(ind-1,1);
        console.log("Inside if");
        break;
      }
    }
    //  for(let emp of this.employees){
    //   if(emp['id'] > ind){
    //     emp['id'] = emp['id']-1; 
    //   }
    // }
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