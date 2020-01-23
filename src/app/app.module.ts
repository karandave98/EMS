import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmployeesComponent } from './employees/employees.component';
import { FilterPipe } from './pipes/filter.pipe';

const appRoutes: Routes = [
  
  { path: '\employees', component: EmployeesComponent }
];


@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(
      appRoutes // <-- debugging purposes only
    ) ],
  
  declarations: [ AppComponent, HelloComponent , EmployeesComponent , FilterPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
