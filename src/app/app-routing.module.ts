import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { radiobuttonsComponent } from './radiobuttons/radiobuttons.component';
import { alertComponent } from './alert/alert.component';
import { selectComponent } from './select/select.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'radiobuttons', },
  { path: 'radiobuttons', component: radiobuttonsComponent },
  { path: 'alert', component: alertComponent },
  { path: 'select', component: selectComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routableComponents = [
  radiobuttonsComponent,alertComponent,selectComponent
];


