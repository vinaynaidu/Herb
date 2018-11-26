import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AgmModule } from './modules/agm.module'; // ng-material modules
import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroPanelComponent } from './components/carousal/carousal.component';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    HomeComponent,
    HeroPanelComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    AgmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
