import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-direc-pers',
  template: `
    <p [appResaltar]="'#bfff00'">
      Directiva Personalizada
    </p>
  `,
  styles: []
})
export class DirecPersComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit() {
  }

}
