export class Klacht {
  id: number;
  addedOn: Date = null
  category: string = '';
  content: string = '';
  complete: boolean = false;
  completedOn: Date = null;

  constructor(values: Object = {}) {
    Object.assign(this, values)
  }
}
