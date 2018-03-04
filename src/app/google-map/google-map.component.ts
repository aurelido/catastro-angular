import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';
import {AgmMap, AgmMarker, GoogleMapsAPIWrapper, LatLng, LatLngBounds, MouseEvent} from '@agm/core';

import { GeoService } from '../shared/services/geo.service';
import { LocationService } from '../shared/services/location.service';
import { Coordinates, Location } from '../shared/models';
// import { Marker } from '../shared/models';


@Component({
  selector: 'google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit, OnDestroy {
  @ViewChild(AgmMap) agmMap;

  lat: number;
  lng: number;
  zoom = 10;

  results: Location[];
  loading = false;
  geolocate = false;

  locations: any;
  subscription: any;
  observable: any;
  markers: any;

  bounds: LatLngBounds;

  constructor(
    private geo: GeoService,
    private locate: LocationService
  ) {
    // geos: any[]; //GeoJson array

    // onMapReady(map: GoogleMap) {
    // geos.forEach(geo => map.data.addGeoJson(geo));
    // map.data.setStyle(feature => feature.getProperty('style'));
    // }
  }

  ngOnInit() {
    this.loadLocations();
    this.getUserLocation();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  loadLocations() {
    this.loading = true;
    this.results = [];
    this.markers = new Array<AgmMarker>();
    // this.bounds = this.agmMap.LatLngBounds();

    console.log('Bounds... ', this.agmMap);

    this.subscription = this.locate.getAll()
          .subscribe(data => {
              const currentHits = [];
              console.log('Locations in archive component... ', data);

              this.loading = false;
              // this.locations = data;
              this.locations = data.properties;

              console.log('the HINTS subscription is WORKING...', data);
              this.locations.map(function(val) {
                  const loc = new Location();
                  Object.keys(val.properties)
                        .forEach((key) => {
                          loc[key] = val.properties[key];
                  });

                  if (val.geometry) {
                    const _coordx = val.geometry.coordinates[1];
                    const _coordy = val.geometry.coordinates[0];
                    loc.coord = new Coordinates(_coordx, _coordy);
                    currentHits.push(loc.toMarkerFor());
                    // this.agmMap.fitBounds(loc.toMarkerFor());
                  }
              });

              // Adding markets
              this.markers = this.markers.concat(currentHits);
          },
          function(err) {
              console.log('ERROR in the subscription', err);
          },
          function() {
              console.log('the subscription is DONE!', this);

              if (this.markers) {
                this.markers.forEach(element => {
                  // this.bounds.extend(element);
                  // this.agmMap.fitBounds(element);       // auto-zoom
                  this.agmMap.panToBounds(element);     // auto-center

                  // this.agmMap.fitBounds(this.bounds);       // auto-zoom
                  // this.agmMap.panToBounds(this.bounds);     // auto-center
                });
              }
          });
  }

  private getUserLocation() {
    /// locate the user

    if (navigator.geolocation && this.geolocate) {
        navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;

        // this.geo.getLocations(100, [this.lat, this.lng]);
      });
    } else {
      this.lat = 38.9788802538581;
      this.lng = -3.931567;
    }
    this.zoom = 14;
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

  markerDragEnd(m: AgmMarker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
}
