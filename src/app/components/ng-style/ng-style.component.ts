import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamanio" [style.color]="color">
      Hola.. Soy una etiqueta
    </p>
    <button class="btn btn-success" (click)="tamanio = tamanio + 2"><i class="fas fa-plus"></i></button>
    <button class="btn btn-danger" (click)="tamanio = tamanio - 2"><i class="fas fa-minus"></i></button>
    <label>Tamaño de fuente: {{tamanio}}</label>
    <br>
    <button class="btn btn-primary" (click)="color = 'blue'">Azul</button>
    <button class="btn btn-success" (click)="color = 'green'">Verde</button>
    <button class="btn btn-danger" (click)="color = 'red'">Rojo</button>
    <button class="btn btn-dark" (click)="color = 'black'">Negro</button>
    <label>Color actual: {{color}}</label>
  `,
  styles: [`.btn { margin:3px;}
            label {margin-left:5px}`]
})
export class NgStyleComponent implements OnInit {

  tamanio:number = 30;
  color:String = 'black';
  constructor() { }


  ngOnInit() {
  }

}
