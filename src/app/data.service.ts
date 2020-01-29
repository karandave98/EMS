import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  tmp : any = {};
  private inp = new BehaviorSubject(this.tmp);
  currentEmp = this.inp.asObservable();

  constructor() { }

  addEmployee(employee: any) {
    this.inp.next(employee);
  }

}