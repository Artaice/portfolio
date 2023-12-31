import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LegalComponent } from './components/legal/legal.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'legal', component: LegalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
