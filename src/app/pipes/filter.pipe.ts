import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { DataService } from '../data.service';

@Pipe({
  name: 'pilter'
})
@Injectable()
export class FilterPipe implements PipeTransform {
  constructor(private datas : DataService){}

  transform(items: any[], field: string, value: string, trigger : number): any[] {

   

    items = this.datas.getData();
    if (!items) {
      return [];
    }
    if (!field || !value) {
      return items;
    }
     if(trigger==1){
       return [items.filter(singleItem =>
      singleItem[field].toLowerCase().match("^".concat(value.toLowerCase()))
    ).length];
    }
    
    return items.filter(singleItem =>
      singleItem[field].toLowerCase().match("^".concat(value.toLowerCase()))
    );
    
  
  }
}