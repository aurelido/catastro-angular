import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { URLSearchParams } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ApiService } from './api.service';
import { Coordinates, Location, LocationListConfig } from '../models';

@Injectable()
export class LocationService {

  hits = new BehaviorSubject([]);
  locations = this.hits.asObservable();

  constructor (
    private apiService: ApiService
  ) {}

  query(config: LocationListConfig): Observable<{properties: Location[], propertiesCount: number}> {
    // Convert any filters over to Angular's URLSearchParams
    const params = {};

    Object.keys(config.filters)
          .forEach((key) => {
            params[key] = config.filters[key];
    });

    const feed = ((config.type === 'feed') ? '/feed' : '');
    // return this.apiService.get('/properties' + feed, new HttpParams(params));
    console.log('Retriving properties from location.service.ts...');
    return this.apiService.get('/properties');
  }

  /**
   * Retrieve location by the Catastral Reference
   */
  get(rc): Observable<Location> {
    return this.apiService.get('/properties/' + rc)
            .map(data => data.article);
  }

  getLocations() {
    console.log('getLocations... ');
    return this.apiService.get('/properties')
                    .map(data => {
                      console.log('Response from /porperties... ', data);
                      const currentHits = this.hits.value;

                      data.properties.forEach(item => {
                        // let loc = new Location(item.properties.rc,
                        //   item.properties.location,
                        //   item.geometry.coordinates[1],
                        //   item.geometry.coordinates[0],
                        //   item.properties.type,
                        //   item.properties.use,
                        //   item.properties.surface,
                        //   item.properties.yoc
                        // );
                        // currentHits.push(loc);
                      });
                      this.hits.next(currentHits);
                    });
  }

  getAll(): Observable<{username: string, properties: any[], propertiesCount: number}> {
    console.log('get all locations... ');
    return this.apiService.get('/properties');
  }

  getImage(rc): Observable<string> {
      console.log('getLocations... ');
      return this.apiService.get('/properties/' + rc + '/image')
              .map(data => data.image);
    }

}
