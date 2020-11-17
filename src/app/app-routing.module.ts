import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CreateCommentComponent } from './create-comment/create-comment.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { CategoryPageComponent } from './category-page/category-page.component';

const routes: Routes = [
  { path: 'forum/:category', component: CategoryPageComponent },
  { path: 'menu', component: MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
