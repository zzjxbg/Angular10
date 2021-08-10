import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './components/home/home.component';
import { HttpComponent } from './components/http/http.component';
import {HttpClientModule,HttpClientJsonpModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LifecycleComponent,
    HomeComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
