import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './components/home/home.component'
import {HttpComponent} from "./components/http/http.component";
import {NewsComponent} from "./components/news/news.component";
import {NewsdetailComponent} from "./components/newsdetail/newsdetail.component";
import {ProductComponent} from "./components/product/product.component";
import {ProductdetailComponent} from "./components/productdetail/productdetail.component";
import {WelcomeComponent} from "./components/home/welcome/welcome.component";
import {SettingComponent} from "./components/home/setting/setting.component";

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,
    children:[{
      path:'welcome',
      component: WelcomeComponent
    },{
      path:'setting',
      component: SettingComponent
    },{
      path:'*',
      redirectTo:'welcome'
    }]
  },
  {
    path:'http',
    component:HttpComponent
  },
  {
    path:'news',
    component:NewsComponent
  },
  {
    path:'newsdetail',
    component:NewsdetailComponent
  },
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'product/detail/:id',   //动态传参
    component:ProductdetailComponent
  },
  {
    path:'*',
    redirectTo:'/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
