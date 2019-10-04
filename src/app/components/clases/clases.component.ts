import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: [`.btn {margin:3px}`]
})
export class ClasesComponent implements OnInit {
  alerta:String = 'alert-danger';
  propiedades:Object = {
    danger:true
  }
  constructor() { }

  ngOnInit() {
  }

}
