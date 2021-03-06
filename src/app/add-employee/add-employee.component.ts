import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { FormGroup,  NgForm, Validators } from '@angular/forms';
import { Router }  from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})

export class AddEmployeeComponent implements OnInit {
  model :any = {};
  constructor(private router: Router, private ds : DataService ) { }

  ngOnInit() {
 
  }
 @Output() messageEvent = new EventEmitter<any>();

  addEmp(){
    
    console.log(this.model);
    this.ds.createEmployee(this.model).subscribe((ret)=>{
          console.log("Employee created: ", ret);
    });
    this.router.navigate(["/employees"]);
  }
}
// export class Employee{
//   name : string;
//   location : string;
//   email: string;
//   mobile : number;

//   constructor(name: string, location :string, email : string, mobile :number) { 
//     this.name = name; 
//     this.location = location;
//     this.email = email;
//     this.mobile = mobile;
//     }
// }