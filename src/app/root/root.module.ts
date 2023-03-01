import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootRoutingModule } from './root-routing.module';
import { RootDefaultComponent } from './components/root-default/root-default.component';
import {BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppProfileComponent } from './components/app-profile/app-profile.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppDashboardComponent } from './components/app-dashboard/app-dashboard.component';
import { AppContestHistoryComponent } from './components/app-contest-history/app-contest-history.component';
import { AppProjectsComponent } from './components/app-projects/app-projects.component';
import { Router } from '@angular/router';


@NgModule({
  declarations: [RootDefaultComponent, AppProfileComponent, AppDashboardComponent, AppContestHistoryComponent, AppProjectsComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RootRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
  ],
  bootstrap: [RootDefaultComponent]
})
export class RootModule { }
