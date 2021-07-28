import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { FormComponent } from './components/form/form.component';
import { SearchComponent } from './components/search/search.component';
import {StorageService} from "./services/storage.service";
import { TodolistComponent } from './components/todolist/todolist.component';

@NgModule({
  //申请组件,当前运行项目的组件
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NewsComponent,
    FormComponent,
    SearchComponent,
    TodolistComponent
  ],
  //引入当前运行的模块
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  //定义服务
  providers: [StorageService],
  bootstrap: [AppComponent] //引导AppModule来启动应用
})
export class AppModule { }
