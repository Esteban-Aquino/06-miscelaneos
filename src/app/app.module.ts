import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { CssComponent } from './components/css/css.component';
import { ClasesComponent } from './components/clases/clases.component';
import { AsyncComponent } from './components/async/async.component';
import { DirecPersComponent } from './components/direc-pers/direc-pers.component';
import { ResaltarDirective } from './directives/resaltar.directive';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent,
    ClasesComponent,
    AsyncComponent,
    DirecPersComponent,
    ResaltarDirective,
    NgSwitchComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
