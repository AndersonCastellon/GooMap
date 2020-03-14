import { Component, OnInit } from '@angular/core';
import { Marker } from 'src/app/classes/marker.class';
import { SaveMarkersService } from 'src/app/services/save-markers.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { EditMarkerComponent } from './edit-marker/edit-marker.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public markers: Marker[] = [];

  lat = 13.487445;
  lon = -88.185955;

  zoom = 15;

  constructor(
    private local: SaveMarkersService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.markers = this.local.restoreMarkers();
  }

  createMarker(infoClick: any) {
    const coords = infoClick.coords;
    this.pushMarker(
      coords.lat,
      coords.lng,
      infoClick.placeId ? infoClick.placeId : ''
    );

    this.openSnackBar('Marcador creado');
  }

  deleteMarker(index: number) {
    this.markers.splice(index, 1);
    this.persist();

    this.openSnackBar('Marcador eliminado');
  }

  editMarker(marker: Marker): void {
    const dialogRef = this.dialog.open(EditMarkerComponent, {
      width: '250px',
      data: { title: marker.title, description: marker.description }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        return;
      }
      marker.title = result.title;
      marker.description = result.description;
      this.persist();
      this.openSnackBar('Marcador actualizado');
    });
  }

  private pushMarker(lat: number, lon: number, placeId?: string) {
    const marker = new Marker(lat, lon, placeId);
    this.markers.push(marker);
    this.persist();
  }

  private persist() {
    this.local.persistMarkers(this.markers);
  }

  private openSnackBar(message: string) {
    this.snackBar.open(message, 'Cerrar', { duration: 2000 });
  }
}
