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
  }

  getLocations(): void {
    this.locationService.getAll()
      .subscribe(locations => {
        console.log('Locations in archive component... %j', locations);
        this.locations = locations;
      });
  }

}
