import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapViewComponent } from './map-view/map-view.component';
import { UrbanResourcesPageComponent } from './urban-resources-page/urban-resources-page.component';
import { UrbanResourcesMapComponent } from './urban-resources-map/urban-resources-map.component';


@NgModule({
  declarations: [
    AppComponent,
    MapViewComponent,
    UrbanResourcesPageComponent,
    UrbanResourcesMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
