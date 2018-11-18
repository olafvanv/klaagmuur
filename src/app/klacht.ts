export class Klacht {
  id: string;
  addedOn: Date = new Date();
  category: string = '';
  content: string = '';
  complete: boolean = false;
  completedOn: Date = null;
  highPriority: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values)
  }
}
