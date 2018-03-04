import { environment } from '../../../environments/environment';

export class Coordinates {
  xcen: number;
  ycen: number;
  srs: string;

  constructor(_coordx: number, _coordy: number, _srs?: string) {
    this.xcen = _coordx;
    this.ycen = _coordy;
    this.srs = (_srs) ? _srs : environment.srs;
  }

}
