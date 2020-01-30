import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private dataService : DataService, private router: Router) { }
   selEmp:any = {};
  ngOnInit() {
    this.selEmp = this.dataService.getDetails();

  }
  back(){
     this.router.navigate(["/employees"]);
  }

}