import { Component, OnInit } from '@angular/core';

import { latLng, LatLng, tileLayer } from 'leaflet';
import { LeafletCoreDemoModel } from './home.model';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor() {}

  /*
   * This is a specification of the leaflet options
   * The reason to duplicate this object is so we can easily render it to the template
   */
  optionsSpec: {
    layers: any[],
    zoom: number,
    center: number[]
  } = {
    layers: [
      {
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        maxZoom: 18,
        attribution: 'Open Street Map'
      }
    ],
    zoom: 12,
    center: [ 38.9788802538581, -3.9315679 ]
  };

  // Fields for managing the form inputs and binding to leaflet zoom/center
  model = new LeafletCoreDemoModel(
    this.optionsSpec.center[0],
    this.optionsSpec.center[1],
    this.optionsSpec.zoom
  );
  zoom: number;
  center: LatLng;

  options: {};

  ngOnInit() {
    /*
     * This are the leaflet map options that we're going to use for input binding
     */
    this.options = {
      layers: this.optionsSpec.layers.map((l) => {
        return tileLayer(l.url, { maxZoom: l.maxZoom, attribution: l.attribution });
      }),
      zoom: this.optionsSpec.zoom,
      center: latLng(this.optionsSpec.center[0], this.optionsSpec.center[1])
    };
  }

  onApply() {
    this.zoom = this.model.zoom;
    this.center = latLng(this.model.latitude, this.model.longitude);

    return false;
  }

}
