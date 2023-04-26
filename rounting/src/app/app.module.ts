import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalsComponent } from './animals/animals.component';
import { FruitsComponent } from './fruits/fruits.component';
import { GenericComponent } from './generic/generic.component';
import { FOOComponent } from './foo/foo.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,
    FruitsComponent,
    GenericComponent,
    FOOComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
