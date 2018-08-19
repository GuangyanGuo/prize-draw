import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';


import { AppComponent }         from './app.component';


import { PlayersComponent } from './players/players.component';
import { SheetJSComponent } from './sheetjs.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
   
  ],
  declarations: [
    AppComponent,
    SheetJSComponent,
    PlayersComponent,
    
    
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }