import { Injectable } from '@angular/core';
import { Klacht } from '../klacht';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  lastId: number = 0; 
  klachten: Klacht[] = [];

  constructor() { }

  addKlacht(klacht: Klacht): DataService{
    if(!klacht.id){
      klacht.id = ++this.lastId;
    }

    this.klachten.push(klacht);
    return this;
  }

  getAllKlachten(): Klacht[]{
    return this.klachten;
  }

  
}
