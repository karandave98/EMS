import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Employee {
  id: number;
  name: string;
  location:string;
  email:string;
  mobile:string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private tmp : any;
  private heroesUrl = 'api/employees';
  private employees : Employee[]; 
  constructor(private http: HttpClient) {
    
    
   }
  getEmp(){
      return this.http.get(this.heroesUrl);
   }

   getEmployee(empId){
       return this.http.get(`${this.heroesUrl }/${empId}`); 
  }
  createEmployee(employee: Employee){
      return this.http.post(`${this.heroesUrl }`, employee)
  }

  public deleteEmployee(empId){
      return this.http.delete(`${this.heroesUrl }/${empId}`)
  }
  public updateEmp(employee: Employee){
    console.log(employee);
      return this.http.put(this.heroesUrl, employee)
  }







  
  setData(data:any){
      let maxID  = -1;
      for(let rmp of this.employees){
        if(rmp["id"] > maxID){
          maxID = rmp["id"];
        }
      }
        data["id"]= maxID + 1;
        this.employees.push(data);
    }
    getLength(){
      return this.employees.length;
    }
    getData():any{
       this.getEmp().subscribe((data : any[])=>{
        // console.log(data);
        this.employees = data;        
    });
         return this.employees;
    }
    
  private ind : number = -1;
  setEditData(index : number){
    this.ind = index;
  }
  getEditData():number{
    return this.ind;
  }
  private det : any={};
  setDetails(emp: any){
    this.det = emp;
  }
  getDetails() : any{
    return this.det;
  }
}