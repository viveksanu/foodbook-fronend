import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewQuestionsComponent  } from './components/view-questions/view-questions.component';

const routes: Routes = [
  { path: '', redirectTo: 'questions', pathMatch: 'full' },
  { path: 'questions', component: ViewQuestionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }