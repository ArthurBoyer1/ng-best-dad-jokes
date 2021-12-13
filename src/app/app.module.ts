import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrentJokePipe } from './pipes/current-joke.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    CurrentJokePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    HttpClientModule,
    CurrentJokePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
