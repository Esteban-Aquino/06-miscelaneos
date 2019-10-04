import { Directive, ElementRef, HostListener, Input  } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective {

  constructor(private el:ElementRef) { 
    
  }
  
  @Input('appResaltar') nuevoColor:String;

  @HostListener('mouseenter') entro(){
    //this.el.nativeElement.style.backgroundColor = "yellow";
    //console.log(this.nuevoColor);
    this.resaltar(this.nuevoColor||"yellow");
  }
  @HostListener('mouseleave') salio(){
    this.resaltar(null);
  }

  resaltar(color:String){
    this.el.nativeElement.style.backgroundColor = color;
  }
  

}
