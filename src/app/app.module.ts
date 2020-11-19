import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { ThreadComponent } from './thread/thread.component';
import { CommentComponent } from './comment/comment.component';
import { MenuComponent } from './menu/menu.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { FiltersComponent } from './filters/filters.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { CreateCommentComponent } from './create-comment/create-comment.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule, MatChip} from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import { HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ThreadComponent,
    CommentComponent,
    MenuComponent,
    CategoryPageComponent,
    FiltersComponent,
    CreatePostComponent,
    CreateCommentComponent,
    HomeComponent,
    CreateAccountComponent,
    LoginComponent,
    ChatBotComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatGridListModule,
    MatDividerModule,
    MatChipsModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatSelectModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
