import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapViewComponent } from './map-view/map-view.component';
import { UrbanResourcesPageComponent } from './urban-resources-page/urban-resources-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MapViewComponent,
    UrbanResourcesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
