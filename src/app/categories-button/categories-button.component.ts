import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddKlachtDialogComponent } from '../_dialogs/add-klacht-dialog/add-klacht-dialog.component';

@Component({
  selector: 'app-categories-button',
  templateUrl: './categories-button.component.html',
  styleUrls: ['./categories-button.component.scss'],
  animations: [
    trigger('toggleCategoryMenu',[
      state('visible', style({
        display: 'block', opacity: '1'
      })),
      state('hidden', style({
        display: 'none', opacity: '0'
      })),
      state('rotate45', style({
        transform: 'rotate(45deg)'
      })),
      state('visible-btn1', style({
        opacity: '1',
        transform: 'rotate(20deg) translate(-130px) rotate(-20deg)'
      })),
      state('visible-btn2', style({
        opacity: '1',
        transform: 'rotate(55deg) translate(-130px) rotate(-55deg)'
      })),
      state('visible-btn3', style({
        opacity: '1',
        transform: 'rotate(90deg) translate(-130px) rotate(-90deg)'
      })),
      state('visible-btn4', style({
        opacity: '1',
        transform: 'rotate(125deg) translate(-130px) rotate(-125deg)'
      })),
      state('visible-btn5', style({
        opacity: '1',
        transform: 'rotate(160deg) translate(-130px) rotate(-160deg)'
      })),
      transition('* <=> hidden', [
        animate('.3s')
      ]),
      transition('* <=> rotate45', [
        animate('.2s')
      ])
    ])
  ]
})
export class CategoriesButtonComponent implements OnInit {
  
  showCategoriesMenu : boolean = false;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  toggleCategoryMenu = function() {
    this.showCategoriesMenu = !this.showCategoriesMenu
  }

  openKlachtDialog(category) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.hasBackdrop = true;

    dialogConfig.data = {
      category: category
    };

    this.dialog.open(AddKlachtDialogComponent, dialogConfig);

  }
}