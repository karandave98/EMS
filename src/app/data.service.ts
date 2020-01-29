import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private tmp : any;

  constructor() { }
  setData(data:any){
        this.tmp = data;
    }

    getData():any{
        return this.tmp;
    }

}