import { Injectable } from '@angular/core';
import { Marker } from '../classes/marker.class';

@Injectable({
  providedIn: 'root'
})
export class SaveMarkersService {
  persistMarkers(markers: Marker[]): void {
    localStorage.setItem('markers', JSON.stringify(markers));
  }

  restoreMarkers(): Marker[] {
    return JSON.parse(localStorage.getItem('markers')) || [];
  }
}
