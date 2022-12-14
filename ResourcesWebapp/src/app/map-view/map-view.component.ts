import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { catchError, map } from 'rxjs/operators';


@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.sass']
})
export class MapViewComponent implements OnInit {

  apiLoaded: Observable<boolean>;
  apiUrl: string = 'https://maps.googleapis.com/maps/api/js?key=' + environment.GOOGLE_MAP_API_KEY

  resourceLocations = [] //FIXME: create a model to type this

  @ViewChild('googleMap') map?: GoogleMap;
  @ViewChild(MapInfoWindow) infoWindow?: MapInfoWindow;

  mapOptions: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    restriction: {
      latLngBounds: {
        north: 62,
        south: 46,
        west: -115,
        east: -95,
      },
    },
  }

  constructor(private http: HttpClient) {
    // Lazy load google maps API
    // FIXME: Move to root service
    console.log(this.apiUrl)
    this.apiLoaded = http.jsonp(this.apiUrl, 'callback').pipe(
      map(() => true),
      catchError(() => of(false))
    );
   }

  ngOnInit(): void {
  }

}




// import { Component, OnInit, ViewChild } from '@angular/core';
// import { environment } from 'src/environments/environment';
// import { HttpClient } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { catchError, map } from 'rxjs/operators';
// import { ServiceDisruptionsService } from 'src/app/core/services/service-disruptions.service';
// import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
// import { ServiceDisruption } from 'src/app/core/models/service-disruption';

// @Component({
//   selector: 'app-disruptions-map',
//   templateUrl: './map.component.html',
//   styleUrls: ['./map.component.scss'],
// })
// export class MapComponent implements OnInit {
//   apiLoaded: Observable<boolean>;
//   apiUrl: string =
//     'https://maps.googleapis.com/maps/api/js?key=' + environment.GOOGLE_API_KEY;

//   disruptions: ServiceDisruption[] = [];
//   selectedDisruption?: ServiceDisruption;

//   @ViewChild('googleMap') map?: GoogleMap;
//   @ViewChild(MapInfoWindow) infoWindow?: MapInfoWindow;

//   mapOptions: google.maps.MapOptions = {
//     zoomControl: true,
//     scrollwheel: true,
//     disableDoubleClickZoom: false,
//     restriction: {
//       latLngBounds: {
//         north: 62,
//         south: 46,
//         west: -115,
//         east: -95,
//       },
//     },
//   };

//   constructor(
//     private http: HttpClient,
//     private disruptionsService: ServiceDisruptionsService
//   ) {
//     // Lazy load google maps API
//     // TODO: Move to root service
//     this.apiLoaded = http.jsonp(this.apiUrl, 'callback').pipe(
//       map(() => true),
//       catchError(() => of(false))
//     );
//   }

//   ngOnInit(): void {
//     this.disruptionsService.getDisruptions().subscribe({
//       next: (result) => {
//         this.disruptions = result;
//       },
//       error: (e) => {
//         console.log(e);
//       },
//     });
//   }

//   openInfoWindow(marker: MapMarker) {
//     let communityName = marker.getTitle();
//     this.selectedDisruption = this.disruptions.find(
//       (d) => d.community_name == communityName
//     );
//     this.infoWindow?.open(marker);
//   }
// }
