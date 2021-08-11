import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './components/home/home.component';
import { HttpComponent } from './components/http/http.component';
import {HttpClientModule,HttpClientJsonpModule} from "@angular/common/http";
import { NewsComponent } from './components/news/news.component';
import { NewsdetailComponent } from './components/newsdetail/newsdetail.component';
import { ProductComponent } from './components/product/product.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { SettingComponent } from './components/home/setting/setting.component';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleComponent,
    HomeComponent,
    HttpComponent,
    NewsComponent,
    NewsdetailComponent,
    ProductComponent,
    ProductdetailComponent,
    WelcomeComponent,
    SettingComponent
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
