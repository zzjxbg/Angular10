import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { ArticlelistComponent } from './components/articlelist/articlelist.component';
import { InfoComponent } from './components/info/info.component';


@NgModule({
  declarations: [
    ArticleComponent,
    ArticlelistComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule
  ]
})
export class ArticleModule { }
