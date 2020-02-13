import { Directive, ElementRef } from '@angular/core';
import { DataService } from './data.service';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(el : ElementRef ,private myServ : DataService) { 
    console.log(el);
    el.nativeElement.innerText= this.myServ.getData().length;
  }

}