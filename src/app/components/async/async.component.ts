import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styles: ['label {margin:4px}']
})
export class AsyncComponent implements OnInit {
  cargando = false;
  constructor() { }

  ngOnInit() {
  }

  ejecutar(){
    this.cargando = true;
    setTimeout(()=> this.cargando = false,3000);
  }

}
