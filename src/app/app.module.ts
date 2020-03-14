import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MapComponent } from './components/map/map.component';
import { EditMarkerComponent } from './components/map/edit-marker/edit-marker.component';

import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  entryComponents: [EditMarkerComponent],
  declarations: [AppComponent, MapComponent, EditMarkerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCS3oSTsv0uaq2MkPgK7kMFn8Yx6p78VAg'
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
