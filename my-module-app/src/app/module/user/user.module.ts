import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { AddressComponent } from './components/address/address.component';
import { OrderComponent } from './components/order/order.component';
import {UserRoutingModule} from "./user-routing.module";


@NgModule({
  declarations: [
    UserComponent,
    AddressComponent,
    OrderComponent
  ],
  //暴露组件,让其他模块可以访问
  exports: [
    UserComponent,
    AddressComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
