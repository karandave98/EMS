import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmployeesComponent } from './employees/employees.component';
import { FilterPipe } from './pipes/filter.pipe';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

const appRoutes: Routes = [
  
  { path: '\employees', component: EmployeesComponent },
  { path: '\addEmployee', component : AddEmployeeComponent}
];


@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(
      appRoutes // <-- debugging purposes only
    ) ],
  
  declarations: [ AppComponent, HelloComponent , EmployeesComponent , FilterPipe, AddEmployeeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
