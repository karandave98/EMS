import { Component, OnInit } from '@angular/core';
import { FormGroup,  NgForm, Validators } from '@angular/forms';


import { DataService,Employee } from '../data.service';
import { Router }  from '@angular/router';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  constructor(private dataServe : DataService , private router: Router ) { }
  model : any ={};
  employees = [ ];
  ngOnInit() {
    let index  = this.dataServe.getEditData();
    this.employees = this.dataServe.getData();
    for ( let emp of this.employees){
      if(emp.id === index){
        this.model=emp;
        break;
      }
    }
    
  }
  updateEmp(){
     
      this.dataServe.updateEmp(this.model);
      
      this.router.navigate(["/employees"]);
  }

}