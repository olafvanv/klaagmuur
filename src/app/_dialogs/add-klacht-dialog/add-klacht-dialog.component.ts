import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-add-klacht-dialog",
  templateUrl: "./add-klacht-dialog.component.html",
  styleUrls: ["./add-klacht-dialog.component.scss"]
})
export class AddKlachtDialogComponent implements OnInit {

  category: string;

  constructor(
    public dialogRef: MatDialogRef<AddKlachtDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.category = data.category;
  }

  ngOnInit() {

  }

  close(): void {
    this.dialogRef.close();
  }
}
