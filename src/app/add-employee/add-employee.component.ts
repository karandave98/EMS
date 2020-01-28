import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class Employee{
 public name : string;
 public location : string;
  email: string;
  mobile : number;
}
export class AddEmployeeComponent implements OnInit {
   private myForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      'name' : new FormControl(),
      'location' : new FormControl(),
      'email' : new FormControl(),
      'mobile' : new FormControl()
    });
  }
  printMyForm() {
   console.log(this.myForm);
 }
 public emp : Employee;
 @Output() messageEvent = new EventEmitter<Employee>();

  addEmp(){


    this.messageEvent.emit(this.emp)
  }
}