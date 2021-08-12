import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticleComponent} from "./article.component";
import {ArticlelistComponent} from "./components/articlelist/articlelist.component";

const routes: Routes = [
  {
    path:'',
    component: ArticleComponent
  },
  {
    path:'list',
    component: ArticlelistComponent
  }
];

// forChild:用在子模块加载路由配置
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
