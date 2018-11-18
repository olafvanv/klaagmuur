import { Component, OnInit } from "@angular/core";
import { toggleCategoryButton } from "../_animations/toggleCategoryMenu";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { AddKlachtDialogComponent } from "../_dialogs/add-klacht-dialog/add-klacht-dialog.component";

@Component({
  selector: "app-categories-button",
  templateUrl: "./categories-button.component.html",
  styleUrls: ["./categories-button.component.scss"],
  animations: [
    toggleCategoryButton
  ]
})
export class CategoriesButtonComponent implements OnInit {
  showCategoriesMenu: boolean = false;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  toggleCategoryMenu = function() {
    this.showCategoriesMenu = !this.showCategoriesMenu;
  };

  openKlachtDialog(category) {
    this.toggleCategoryMenu();
    
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = "full-screen-dialog";
    dialogConfig.autoFocus = false;

    dialogConfig.data = {
      category: category
    };

    this.dialog.open(AddKlachtDialogComponent, dialogConfig);
  }
}
