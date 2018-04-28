import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from '../services';
import { Location } from '../models';
import { environment } from '../../../environments/environment';
import { preloader } from 'materialize-css';

@Component({
  selector: 'location-component',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit, OnDestroy {
  @Input() location: Location;
  image: string;
  isLoading: boolean;
  subscription: any;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private locationService: LocationService
  ) {
    console.log('Inside the constructor.. LocationComponent');
    this.isLoading = true;
  }

  ngOnInit() {
    // Retreive the prefetched location
    console.log('Retreive the prefetched location..... ', this.location);

    // this.imageLoader.loading = true;
    this.subscription = this.locationService.getImage(this.location.rc)
                                            .subscribe(
                                              d => { 
                                                this.image = environment.images_server + d;
                                              },
                                              err => {
                                                console.error('oops, an error!', err);
                                                this.image = '/assets/images/location-no-loaded.png';
                                                this.isLoading = false;
                                              },
                                              () => this.isLoading = false
                                            );

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
