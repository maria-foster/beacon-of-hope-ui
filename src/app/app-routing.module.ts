import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CreateCommentComponent } from './create-comment/create-comment.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ChatBotComponent} from './chat-bot/chat-bot.component';
import { CreateAccountComponent } from './create-account/create-account.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'sign-up', component: CreateAccountComponent},
  { path: 'sign-up/forum', redirectTo: "forum/housing"},
  { path: 'sign-up/login', redirectTo: "login"},
  { path: 'login/forum', redirectTo: "forum/housing"},
  { path: 'login/sign-up', redirectTo: "sign-up"},
  { path: 'forum/:category', component: CategoryPageComponent },
  { path: 'menu', component: MenuComponent},
  { path: 'chat-bot', component: ChatBotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
