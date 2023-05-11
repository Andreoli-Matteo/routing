import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GattoComponent } from './gatto/gatto.component';
import { PegasoComponent } from './pegaso/pegaso.component';
import { DragoComponent } from './drago/drago.component';
import { AncientComponent } from './ancient/ancient.component';
import { CircleComponent } from './circle/circle.component';
import { GenericComponent } from './generic/generic.component';

const routes: Routes = [
  {path : 'gatto', component: GattoComponent},
  {path : 'pageso', component: PegasoComponent},
  {path : 'drago', component:DragoComponent},
  {path:'ancient', component:AncientComponent},
  {path:'circle', component:CircleComponent},
  {path: 'generic', component:GenericComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
