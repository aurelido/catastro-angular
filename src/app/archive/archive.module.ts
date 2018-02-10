import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ArchiveComponent } from './archive.component';
import { SharedModule } from '../shared';

import { Location, LocationService } from '../shared';


const archiveRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'archive',
    component: ArchiveComponent
  }
]);

@NgModule({
  imports: [
    archiveRouting,
    SharedModule,
    CommonModule,
  ],
  declarations: [
    ArchiveComponent
  ],
  providers: [
    LocationService
  ]
})
export class ArchiveModule { }
