import { Injectable } from '@angular/core';

// import { AngularFireDatabase } from 'angularfire2/database';
// import * as GeoFire from "geofire";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { distinctUntilChanged, map } from 'rxjs/operators';

import { ApiService } from './api.service';


@Injectable()
export class GeoService {

  dbRef: any;
  geoFire: any;

  hits = new BehaviorSubject([]);
  locations: Location[];

  constructor(
    private apiService: ApiService
  ) {
    /// Reference database location for GeoFire
    // this.dbRef = this.db.list('/locations');
    // this.geoFire = new GeoFire(this.dbRef.$ref);
   }

   /// Adds GeoFire data to database
   setLocation(key: string, coords: Array<number>) {
    //  this.geoFire.set(key, coords)
    //      .then(_ => console.log('location updated'))
    //      .catch(err => console.log(err));
   }


   /// Queries database for nearby locations
   /// Maps results to the hits BehaviorSubject
   getLocations(radius: number, coords: Array<number>) {
      console.log('Radius....', radius);

      // return of(this.LOCS);
       return this.apiService.get(`/properties`)
                  .map(
                    data => this.locations = data.properties
                  );
              // .map(data => data.properties);
            //   .pipe(map(data => {
            //     console.log('Locations.... %j', data);
            //     let hit = {
            //       location: data.properties,
            //       distance: distance
            //     };
            // }));
    }
}
        // let hit = {
        //   location: data.,
        //   distance: distance
        // };

        // let currentHits = this.hits.value;
        // currentHits.push(hit);
        // this.hits.next(currentHits);
        //   // Update the currentUser observable
        //   this.currentUserSubject.next(data.user);
        //   return data.user;
        // }));

    // this.geoFire.query({
    //   center: coords,
    //   radius: radius
    // })
    // .on('key_entered', (key, location, distance) => {
    //   let hit = {
    //     location: location,
    //     distance: distance
    //   };

    //   let currentHits = this.hits.value;
    //   currentHits.push(hit);
    //   this.hits.next(currentHits);
    // });
