import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Klacht } from "src/app/klacht";
import { DataService } from "src/app/_services/data.service";

@Component({
  selector: "app-add-klacht-dialog",
  templateUrl: "./add-klacht-dialog.component.html",
  styleUrls: ["./add-klacht-dialog.component.scss"]
})
export class AddKlachtDialogComponent implements OnInit {

  category: string;
  klacht: Klacht = new Klacht();

  constructor(
    private dataService: DataService,
    public dialogRef: MatDialogRef<AddKlachtDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.klacht.category = data.category;
  }

  ngOnInit() {
  }

  addKlacht(){
    this.dataService.addKlacht(this.klacht);

    this.close();
    this.klacht = new Klacht();
  }

  close(): void {
    this.dialogRef.close();
  }
}
