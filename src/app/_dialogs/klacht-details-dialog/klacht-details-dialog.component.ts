import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DataService } from 'src/app/_services/data.service';
import { Klacht } from 'src/app/klacht';

@Component({
  selector: 'app-klacht-details-dialog',
  templateUrl: './klacht-details-dialog.component.html',
  styleUrls: ['./klacht-details-dialog.component.scss']
})
export class KlachtDetailsDialogComponent implements OnInit {

  klacht: Klacht;

  constructor(
    private dialogRef: MatDialogRef<KlachtDetailsDialogComponent>,
    private dataService: DataService,
    @Inject(MAT_DIALOG_DATA) data
    ) { 
      this.klacht = data.klacht;
    }

  ngOnInit() {
  }

  close(): void{
    this.dialogRef.close();
  }
}
