import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GattoComponent } from './gatto/gatto.component';
import { PegasoComponent } from './pegaso/pegaso.component';
import { DragoComponent } from './drago/drago.component';
import { AncientComponent } from './ancient/ancient.component';
import { CircleComponent } from './circle/circle.component';
import { GenericComponent } from './generic/generic.component';

@NgModule({
  declarations: [
    AppComponent,
    GattoComponent,
    PegasoComponent,
    DragoComponent,
    AncientComponent,
    CircleComponent,
    GenericComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
