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
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { MyDirectiveDirective } from './my-directive.directive';
import { EmpCountPipe } from './pipes/emp-count.pipe';
const appRoutes: Routes = [
  
  { path: '\employees', component: EmployeesComponent },
  { path: '\addEmployee', component : AddEmployeeComponent},
  { path: '\editEmployee', component : EditEmployeeComponent},
  { path: '\details', component : DetailsComponent}
];


@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(
      appRoutes // <-- debugging purposes only
    ),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {delay:0}
    )   ],
  declarations: [ AppComponent, HelloComponent , EmployeesComponent , FilterPipe, AddEmployeeComponent, EditEmployeeComponent, DetailsComponent, MyDirectiveDirective, EmpCountPipe],
  bootstrap:    [ AppComponent ],
  providers: [InMemoryDataService]
})
export class AppModule { }
