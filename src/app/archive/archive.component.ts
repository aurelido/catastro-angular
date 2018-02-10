import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Location, LocationService } from '../shared';

@Component({
  selector: 'archive-page',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  locations: Location[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private locationService: LocationService
  ) {
    console.log('Inside the constructor.. ArchiveComponent');
  }

  ngOnInit() {
    this.getLocations();
    console.log('ngOnInit ArchiveComponent' + this.locations[0]);
  }

  getLocations(): void {
    this.locationService.getLocations()
      .subscribe(locations => this.locations = locations);
  }

}
