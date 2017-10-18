import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'
import { NavigationComponent } from './header/navigation.component';
import { HomeComponent } from './home/home.component';
import { ParentsComponent } from './parents/parents.component';
import { KidsComponent } from './kids/kids.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { BigMackComponent } from './big-mack/big-mack.component';
import { ExpertsComponent } from './experts/experts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    HomeComponent,
    ParentsComponent,
    KidsComponent,
    AboutComponent,
    ContactsComponent,
    BigMackComponent,
    ExpertsComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
