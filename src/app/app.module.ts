import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routing } from './routes';
import { UserListComponent } from './components/user-list.component';
import { UserDetailComponent } from './components/user-detail.component';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule,routing,FormsModule, HttpClientModule ],
  declarations: [ AppComponent,UserListComponent,UserDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
