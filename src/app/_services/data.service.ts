import { Injectable, Inject } from '@angular/core';
import { Klacht } from '../klacht';
import { LOCAL_STORAGE, StorageService } from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  lastId: number = 0; 
  klachten: Klacht[] = [];

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  addKlacht(klacht: Klacht): void{
    //Get current list of klachten
    const currentKlachten: Klacht[] = this.klachten;

    //Set id of the new item
    if(!klacht.id){
      const id: string = `_${Math.random().toString(36).substr(2,9)}`;
      klacht.id = id;
    }

    //Push the klacht inside the current list and save it to the storage
    currentKlachten.push(klacht);
    this.storage.set('klachten', currentKlachten);
  }

  deleteKlacht(klacht: Klacht) :void{
    const id: string = klacht.id;
    const klachten: Klacht[] = this.klachten;
    const index: number = klachten.findIndex(item => item.id === klacht.id);

    klachten.splice(index, 1);
    this.storage.set('klachten', this.klachten);

    console.log(index, klachten);
  }

  getAllKlachten(): Klacht[]{
    this.klachten = this.storage.get('klachten') || [];
    return this.klachten;
  }

  updateKlachten(): void{
    this.storage.set('klachten', this.klachten);
  }
}
