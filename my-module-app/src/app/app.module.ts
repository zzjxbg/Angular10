import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserModule} from './module/user/user.module';
import {ArticleModule} from "./module/article/article.module";
import {ProductModule} from "./module/product/product.module";
// StoreModule: StoreModule是@ngrx/storeAPI中的一个模块，
// 它被用来在应用模块中配置reducer
import { StoreModule } from '@ngrx/store';
import {counterReducer} from './store/reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    ArticleModule,
    ProductModule,
    StoreModule.forRoot({ count: counterReducer }), // 注册store
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
