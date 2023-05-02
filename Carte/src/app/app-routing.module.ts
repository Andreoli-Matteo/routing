import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GattoComponent } from './gatto/gatto.component';
import { PegasoComponent } from './pegaso/pegaso.component';

const routes: Routes = [
  {path : 'gatto', component: GattoComponent},
  {path: 'pageso', component:PegasoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
