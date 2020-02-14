import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from '../data.service';
@Pipe({
  name: 'empCountPipe'
})
export class EmpCountPipe implements PipeTransform {
  constructor(private datas : DataService){}

  transform(value: any, args?: any): any {
    return this.datas.getData().length;
  }

}