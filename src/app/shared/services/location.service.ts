import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Location } from '../models';


@Injectable()
export class LocationService {

  LOCS: Location[] = [
    { id: 1, pc1: '9352504', pc2: 'VJ1195S', coord: {xcen: 419318.81, ycen: 4314837.75, srs: 'EPSG:25830'},
    address: 'CL LAGUNA DE LA POSADILLA 2 N2-4 CIUDAD REAL (CIUDAD REAL)'},
    { id: 1, pc1: '9352502', pc2: 'VJ1195S', coord: {xcen: 419332.94, ycen: 3214840.41, srs: 'EPSG:25830'},
    address: 'CL TABLAS DE DAIMIEL 18 N2-4 CIUDAD REAL (CIUDAD REAL)'},
    { id: 1, pc1: '9352501', pc2: 'VJ1195S', coord: {xcen: 413555.56, ycen: 4514686.36, srs: 'EPSG:25830'},
    address: 'CL CINCO JOTAS 555 SAN BENITO (BADAJOZ)'},
    { id: 1, pc1: '9352503', pc2: 'VJ1195S', coord: {xcen: 419558.84, ycen: 4314834.55, srs: 'EPSG:25830'},
    address: 'CL PATIO DE LAS FLORES 7 PEDROCHES (CORDOBA)'},
    { id: 1, pc1: '9352505', pc2: 'VJ1195S', coord: {xcen: 464533.43, ycen: 4314232.93, srs: 'EPSG:25830'},
    address: 'AV DEL VINO 254 LOGROÑO (RIOJA)'}];

  constructor() {
    console.log('Inside LocationService');
  }


  getLocations(): Observable<Location[]> {
    return of(this.LOCS);
  }

}
