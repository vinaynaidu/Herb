import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { PieChartModule } from '@swimlane/ngx-charts';

import { AgmModule } from './modules/agm.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroPanelComponent } from './components/carousal/carousal.component';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { InboxComponent } from './components/inbox/inbox.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    HomeComponent,
    HeroPanelComponent,
    UserProfileComponent,
    InboxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    AgmModule,
    DeviceDetectorModule.forRoot(),
    PieChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
