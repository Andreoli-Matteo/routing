import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GattoComponent } from './gatto/gatto.component';
import { PegasoComponent } from './pegaso/pegaso.component';
import { DragoComponent } from './drago/drago.component';

const routes: Routes = [
  {path : 'gatto', component: GattoComponent},
  {path : 'pageso', component: PegasoComponent},
  {path : 'drago', component:DragoComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
