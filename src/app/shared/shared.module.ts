import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ListErrorsComponent } from './list-errors/list-errors.component';
import { LocationComponent } from './location/location.component';
import { ShowAuthedDirective } from './show-authed.directive';
import { ImageLoaderComponent } from './image-loader/image-loader.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    ImageLoaderComponent,
    ListErrorsComponent,
    LocationComponent,
    ShowAuthedDirective
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ImageLoaderComponent,
    ListErrorsComponent,
    LocationComponent,
    RouterModule,
    ShowAuthedDirective
  ]
})
export class SharedModule {}
