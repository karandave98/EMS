import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private tmp : any;
  employees = [ 
          { 
            id: 1, 
            name: "Ram", 
            location: "Bangalore", 
            email: "ram@mail.com", 
            mobile: "9867512345" 
          }, 
          { 
            id: 2, 
            name: "Raj", 
            location: "Chennai", 
            email: "raj@mail.com", 
            mobile: "7867534521" 
          }, 
          { 
            id: 3, 
            name: "Vinay", 
            location: "Pune", 
            email: "vinay@mail.com", 
            mobile: "9975287450" 
          }
        ]; 
  constructor() { }
  setData(data:any){
        data["id"]=this.employees.length+1;
        this.employees.push(data);
    }

    getData():any{
        return this.employees;
    }
  ind : number = -1;
  setEditData(index : number){
    this.ind = index;
  }
  getEditData():number{
    return this.ind;
  }
}