import { Injectable } from '@angular/core';
import { GridsterConfig, GridsterItem, GridType, CompactType, DisplayGrid } from 'angular-gridster2';
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
          displayGrid: DisplayGrid.None,
          draggable: {
            enabled: true,
            stop: (event, $element, widget) => {
                console.log($element);
                // putActivities($element);
            },
            dropOverItems: true,
        },
    pushItems: true,
    resizable: {
      enabled: false
    },
    disableAutoPositionOnConflict: true,
    allowMultiLayer: true,
    swap: false,
      swapWhileDragging: true,
      maxLayerIndex: 2
  };
// data for the persionalized widgets
  public layout: GridsterItem[] = [
    { cols: 9, rows: 6, y: 0, x: 1.25 },
    { cols: 9, rows: 12, y: 0, x: 10.25 },
    { cols: 9, rows: 12, y: 0, x: 19.25 },
    { cols: 9, rows: 6, y: 6.1, x: 1.25 },
     // { cols: 15, rows: 10, y: 0, x: 0 }

     /*{ cols: 9, rows: 6, y: 0, x: 1.25, id: 0 },
  { cols: 9, rows: 12, y: 0, x: 10.25, id: 1 },
  { cols: 9, rows: 12, y: 0, x: 19.25, id: 2 },
  { cols: 9, rows: 6, y: 6.05, x: 1.25, id: 3 },
  { cols: 9, rows: 12, y: 12.1, x: 1.25, id: 4 },
  { cols: 9, rows: 6, y: 12.1, x: 10.25, id: 5 },
  { cols: 9, rows: 6, y: 12.1, x: 19.25, id: 6 }*/ 
];

// data for personalizing widgets
public editLayout: GridsterItem[] = [
  { cols: 9, rows: 6, y: 0, x: 1.25, id: 0 },
  { cols: 9, rows: 12, y: 0, x: 10.25, id: 1 },
  { cols: 9, rows: 12, y: 0, x: 19.25, id: 2 },
  { cols: 9, rows: 6, y: 6.05, x: 1.25, id: 3 },
  { cols: 9, rows: 12, y: 12.1, x: 1.25, id: 4 },
  { cols: 9, rows: 6, y: 12.1, x: 10.25, id: 5 },
  { cols: 9, rows: 6, y: 12.1, x: 19.25, id: 6 }

];

visibility: string[] = ['show', 'show', 'show', 'show', 'hide', 'hide', 'hide'];
editVisibility: string[] = ['none', 'none', 'none', 'none', 'show', 'show', 'show']
  constructor() { }
  /*addItem(): void {
    this.layout.push({
      cols: 5,
      id: UUID.UUID(),
      rows: 5,
      x: 0,
      y: 0

    });
    console.log(this.layout);
  }
  */
  deleteItem(id: string): void {
    const item = this.layout.find(d => d.id === id);
    this.layout.splice(this.layout.indexOf(item), 1);
  }

  removeItem(id: string): void {
    this.visibility[id] = 'hide';
    this.editVisibility[id] = 'show';
    console.log(id);
  }

    addItem(id: string): void {
    this.visibility[id] = 'show';
    this.editVisibility[id] = 'none';
    console.log(id);
  }
}


