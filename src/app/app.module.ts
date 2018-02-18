import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { ArchiveModule } from './archive/archive.module';
import {
  SharedModule,
  FooterComponent,
  HeaderComponent,
  ApiService,
  AuthGuard,
  NoAuthGuard,
  UserService,
  LocationService,
  JwtService,
  HttpTokenInterceptor
} from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    ArchiveModule,
    HomeModule,
    rootRouting,
    SharedModule,
    LeafletModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true},
    ApiService,
    AuthGuard,
    JwtService,
    LocationService,
    NoAuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
