import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { GoogleMapComponent } from './google-map.component';
import { SharedModule } from '../shared';
import { GeoService } from '../shared/services/geo.service';
import { AuthGuard } from '../shared/services/auth-guard.service';


const agmRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'map',
    component: GoogleMapComponent
  }
]);

@NgModule({
  imports: [
    CommonModule,
    agmRouting,
    SharedModule,
    AgmCoreModule
  ],
  declarations: [
    GoogleMapComponent
  ],
  providers: [
    GeoService
  ]
})
export class GoogleMapModule { }
