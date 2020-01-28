import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
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
  addEmp(){
    console.log('Registration successful.');
   console.log(myForm.value);
  }

}