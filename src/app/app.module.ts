import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StorageServiceModule } from 'angular-webstorage-service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './_modules/material/material.module';
import { CategoriesButtonComponent } from './categories-button/categories-button.component';
import { KlachtenListComponent } from './klachten-list/klachten-list.component';
import { ExcuusjesListComponent } from './excuusjes-list/excuusjes-list.component';
import { AddKlachtDialogComponent } from './_dialogs/add-klacht-dialog/add-klacht-dialog.component';
import { KlachtDetailsDialogComponent } from './_dialogs/klacht-details-dialog/klacht-details-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesButtonComponent,
    KlachtenListComponent,
    ExcuusjesListComponent,
    AddKlachtDialogComponent,
    KlachtDetailsDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    StorageServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AddKlachtDialogComponent,
    KlachtDetailsDialogComponent
  ]
})
export class AppModule { }
