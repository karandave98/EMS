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
    this.dataServe.deleteEmployee(ind).subscribe(()=>{
      this.employees = this.dataServe.getData();
      this.empCount = this.employees.length;
    }
    );
    //  for(let emp of this.employees){
    //   if(emp['id'] > ind){
    //     emp['id'] = emp['id']-1; 
    //   }
    // }
   
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