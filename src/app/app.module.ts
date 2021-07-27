import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  //申请组件,当前运行项目的组件
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  //引入当前运行的模块
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  //定义服务
  providers: [],
  bootstrap: [AppComponent] //引导AppModule来启动应用
})
export class AppModule { }
