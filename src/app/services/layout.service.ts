import { Injectable } from '@angular/core';
import { GridsterConfig, GridsterItem, GridType, CompactType } from 'angular-gridster2';
import { UUID } from 'angular2-uuid';
@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  public options: GridsterConfig = {
    gridType: GridType.ScrollVertical,
          compactType: CompactType.None,
          minCols: 30,
          maxCols: 30,
          minRows: 1,
          minItemRows: 5,
          maxItemRows: 50,
          defaultItemCols: 1,
          defaultItemRows: 1,
    draggable: {
      enabled: true
    },
    pushItems: true,
    resizable: {
      enabled: true
    }
  };

  public layout: GridsterItem[] = [
    { cols: 15, rows: 10, y: 0, x: 0 },
    { cols: 15, rows: 10, y: 0, x: 2 },
    { cols: 15, rows: 10, y: 10, x: 0 },
    { cols: 15, rows: 10, y: 16, x: 16 },
    { cols: 15, rows: 10, y: 0, x: 0 }
];
  constructor() { }
  addItem(): void {
    this.layout.push({
      cols: 5,
      id: UUID.UUID(),
      rows: 5,
      x: 0,
      y: 0

    });
    console.log(this.layout);
  }
  deleteItem(id: string): void {
    const item = this.layout.find(d => d.id === id);
    this.layout.splice(this.layout.indexOf(item), 1);
  }
}
