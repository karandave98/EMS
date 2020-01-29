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
  //       { 
  //         id: 1, 
  //         name: "Ram", 
  //         location: "Bangalore", 
  //         email: "ram@mail.com", 
  //         mobile: "9867512345" 
  //       }, 
  //       { 
  //         id: 2, 
  //         name: "Raj", 
  //         location: "Chennai", 
  //         email: "raj@mail.com", 
  //         mobile: "7867534521" 
  //       }, 
  //       { 
  //         id: 3, 
  //         name: "Vinay", 
  //         location: "Pune", 
  //         email: "vinay@mail.com", 
  //         mobile: "9975287450" 
  //       }
  //     ]; 
    
  ngOnInit() {
    this.employees = this.dataServe.getData();
    this.empCount = this.employees.length;
    // if(this.dataServe.getData() != null){
    //      let emp  = this.dataServe.getData();
      
    // }
    // else{
    //   console.log("Enter Else");
     
    // }
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
  }
}