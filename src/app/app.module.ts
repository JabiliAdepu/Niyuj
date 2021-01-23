import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';

//import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CareertipsComponent } from './careertips/careertips.component';
import { CompaniesComponent } from './companies/companies.component';
//import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    //HeaderComponent,
    HomeComponent,
    CareertipsComponent,
    CompaniesComponent,
    //FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
