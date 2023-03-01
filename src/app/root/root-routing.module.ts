import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RootDefaultComponent} from './components/root-default/root-default.component';
import {AppDashboardComponent} from './components/app-dashboard/app-dashboard.component';
import {AppContestHistoryComponent} from './components/app-contest-history/app-contest-history.component';
import { AppProjectsComponent } from './components/app-projects/app-projects.component';


const routes: Routes = [
  // {
  //   path: '',
  //   component: RootDefaultComponent,
  // },
  {
    path: 'dashboard',
    component: AppDashboardComponent
  },
  {
    path: 'cp-history',
    component : AppContestHistoryComponent
  },
  {
    path: 'projects',
    component: AppProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }
