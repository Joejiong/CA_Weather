import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { HttpModule}from '@angular/http';

import { AppComponent } from './app.component';
import { DisplayComponent } from './components/display.component';
import { DetaillistComponent } from './components/detaillist.component';
import { HeaderComponent } from './components/header.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    DetaillistComponent,
    HeaderComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

