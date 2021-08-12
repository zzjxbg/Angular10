import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'article',
    // loadChildren:'./module/article/article.module#ArticleModule'
    loadChildren:()=>import('./module/article/article.module').then(m=>m.ArticleModule)
  },{
    path:'user',
    loadChildren:()=>import('./module/user/user.module').then(m=>m.UserModule)
  },{
    path:'product',
    loadChildren:()=>import('./module/product/product.module').then(m=>m.ProductModule)
  },

];

// forRoot用在根模块加载路由配置
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
