import { Coordinates } from './coordinates.model';
import { Marker } from './marker.model';

export class Location {
  id: number;
  coord: Coordinates;

  rc: string;
  location: string;
  type: string;
  use: string;
  surface: number;
  yoc: number;

  // constructor(_rc: string, _location: string,
  //   _coordx: number, _coordy: number,
  //   _type: string, _use: string,
  //   _surface: number, _yoc: number
  // ) {
  //     this.rc = _rc;
  //     this.coord = new Coordinates(_coordx, _coordy, null); // TODO: Setting optional srs
  //     this.location = _location;
  //     this.type = _type;
  //     this.use = _use;
  //     this.surface = _surface;
  //     this.yoc = _yoc;
  // }

  toMarkerFor = function() {
    let marker: Marker;
    if (this.coord) {
      marker = new Marker ( this.coord.xcen, this.coord.ycen, this.location);
    }
    return marker;
  };
}
