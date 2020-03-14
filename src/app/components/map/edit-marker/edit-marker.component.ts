import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-marker',
  templateUrl: './edit-marker.component.html'
})
export class EditMarkerComponent implements OnInit {
  public form: FormGroup;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditMarkerComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: this.data.title,
      description: this.data.description
    });
  }

  onSave() {
    this.onClose(this.form.value);
  }

  onClose(data?: any): void {
    this.dialogRef.close(data ? data : null);
  }
}
