import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem, GridsterItemComponent } from 'angular-gridster2';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  visibility: string[] = ['show', 'show', 'show', 'show', 'hide', 'hide', 'hide'];
  idValue;
  id;
  /* get options(): GridsterConfig {
    return this.layoutService.options;

  }
  */
  get layout(): GridsterItem[] {
    return this.layoutService.editLayout;
  }

  constructor(
    private layoutService: LayoutService
  ) { }

  options: GridsterConfig;

  onClickMove() {
    // console.log(this.options.draggable.enabled);
    return this.options.draggable = {enabled : false};
  }

  /*remove() {
    this.idValue = this.item;
    this.id = this.idValue.item.id;
    console.log(this.idValue);
  }*/

  ngOnInit() {
this.options = this.layoutService.options;
console.log(this.options.draggable.enabled);
  }
  
}
