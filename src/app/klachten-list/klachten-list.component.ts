import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';
import { Klacht } from '../klacht';

@Component({
  selector: 'app-klachten-list',
  templateUrl: './klachten-list.component.html',
  styleUrls: ['./klachten-list.component.scss']
})
export class KlachtenListComponent implements OnInit {

  klachten: any[] = [];

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.klachten = this.dataService.getAllKlachten();
    let klacht = new Klacht({
      id: 1, category: 'slaap', addedOn: new Date(), content: 'lemme sleep pls'
    });

    this.dataService.addKlacht(klacht);
  }

  getCategoryIcon(category){
    switch(category){
      case 'eten':
        return 'fastfood';
      case 'drinken':
        return 'local_bar';
      case 'slaap':
        return 'hotel';
      case 'mensen':
        return 'group';
      case 'overig':
        return 'help';
      default:
        return '';
    }
  }
  

}
