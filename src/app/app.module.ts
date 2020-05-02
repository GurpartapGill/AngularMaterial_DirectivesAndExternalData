import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ReactiveFormsModule} from '@angular/forms'; 
import {MaterialModule} from './modules/material-ui/material-ui.module';
import { HeaderComponent } from './header/header.component';
import { ReviewTabsComponent } from './review-tabs/review-tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReviewTabsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule, 
	  MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
