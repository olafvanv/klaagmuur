import { Component, OnInit } from "@angular/core";
import { DataService } from "../_services/data.service";
import { Klacht } from "../klacht";
import { addListItem } from '../_animations/addListItem';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { KlachtDetailsDialogComponent } from "../_dialogs/klacht-details-dialog/klacht-details-dialog.component";

@Component({
  selector: "app-klachten-list",
  templateUrl: "./klachten-list.component.html",
  styleUrls: ["./klachten-list.component.scss"],
  animations: [
    addListItem
  ]
})
export class KlachtenListComponent implements OnInit {
  klachten: any[] = [];

  constructor(
    private dataService: DataService,
    private dialog: MatDialog
    ) {}

  ngOnInit() {
    this.klachten = this.dataService.getAllKlachten();
  }

  getCategoryIcon(category) {
    category = category.toLowerCase();
    switch (category) {
      case "eten":
        return "fastfood";
      case "drinken":
        return "local_bar";
      case "slaap":
        return "hotel";
      case "mensen":
        return "group";
      case "overig":
        return "help";
      default:
        return "";
    }
  }

  openDetails(klacht: Klacht): void{
      const dialogConfig = new MatDialogConfig();
  
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = false;
  
      dialogConfig.data = {
        klacht: klacht
      };
  
      this.dialog.open(KlachtDetailsDialogComponent, dialogConfig);
    
  }

  deleteKlacht(klacht: Klacht): void {
    this.dataService.deleteKlacht(klacht);
  }

  setPriority(klacht: Klacht, value: number){
    klacht.highPriority = value === 1 ? true : false;

    this.dataService.updateKlachten();
  }
}
