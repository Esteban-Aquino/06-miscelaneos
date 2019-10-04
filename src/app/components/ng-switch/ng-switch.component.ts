import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styles: []
})
export class NgSwitchComponent implements OnInit {
  alerta:String = 'primary';
  alertas:Object[] = [
    {value:'primary', name: "primary"},
    {value:'secondary', name: "secondary"},
    {value:'success', name: "success"},
    {value:'info', name: "info"},
    {value:'warning', name: "warning"},
    {value:'light', name: "light"},
    {value:'dark', name: "dark"},
    {value:'danger', name: "danger"},
  ];
  constructor() { }

  ngOnInit() {
  }

}
