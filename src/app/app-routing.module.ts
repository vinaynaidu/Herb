import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InboxComponent } from './components/inbox/inbox.component';
import { HomeComponent } from './components/home/home.component';
import { CreateIssueComponent } from './components/create-issue/create-issue.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { LoginComponent } from './components/login/login.component';
import { Error404Component } from './components/error404/error404.component';
import { AdvanceSearchComponent } from './components/advance-search/advance-search.component';
import { CreateRemediationComponent } from './components/create-remediation/create-remediation.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'search', component: AdvanceSearchComponent, canActivate: [AuthGuard] },
  { path: 'inbox', component: InboxComponent, canActivate: [AuthGuard] },
  { path: 'drafts', component: InboxComponent, data: { isDraft: true }, canActivate: [AuthGuard] },
  { path: 'create-issue', component: CreateIssueComponent, canActivate: [AuthGuard] },
  { path: 'create-remediation', component: CreateRemediationComponent, canActivate: [AuthGuard] },
  { path: 'edit-issue/:id', component: CreateIssueComponent, canActivate: [AuthGuard] },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
