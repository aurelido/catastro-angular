import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Location, LocationListConfig, LocationService } from '../shared';

@Component({
  selector: 'archive-page',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  locations: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private locationService: LocationService
  ) {
    console.log('Inside the constructor.. ArchiveComponent');
  }

  limit: 5;
  query: LocationListConfig;
  results: any[];
  loading = false;
  currentPage = 1;
  totalPages: Array<number> = [1];

  setPageTo(pageNumber) {
    this.currentPage = pageNumber;
    this.runQuery();
  }

  runQuery() {
    this.loading = true;
    this.results = [];
    this.limit = 5;

    // Create limit and offset filter (if necessary)
    if (this.limit) {
      this.query.filters.limit = this.limit;
      this.query.filters.offset =  (this.limit * (this.currentPage - 1));
    }

    this.locationService.query(this.query)
          .subscribe(data => {
            console.log('Locations in archive component... ', data);
            this.loading = false;
            this.results = data.properties;

            // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/
            this.totalPages = Array.from(new Array(Math.ceil(data.propertiesCount / this.limit)), (val, index) => index + 1);
    });
  }

  ngOnInit() {
    this.query = new LocationListConfig();
    this.currentPage = 1;
    this.runQuery();

    // this.getLocations();
    // this.locationService.getLocations().subscribe(locations => {
    //   console.log('Locations in archive component... %j', locations);
    //   this.locations = locations;
    // });
  }

  // getLocations(): void {
  //   this.locationService.hits
  //     .subscribe(locations => {
  //       console.log('Locations in archive component... %j', locations);
  //       this.locations = locations;
  //     });
  // }

}
