import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmployeesComponent } from './employees/employees.component';
import { FilterPipe } from './pipes/filter.pipe';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

const appRoutes: Routes = [
  
  { path: '\employees', component: EmployeesComponent },
  { path: '\addEmployee', component : AddEmployeeComponent},
  { path: '\editEmployee', component : EditEmployeeComponent}
];


@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(
      appRoutes // <-- debugging purposes only
    ) ],
  declarations: [ AppComponent, HelloComponent , EmployeesComponent , FilterPipe, AddEmployeeComponent, EditEmployeeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
