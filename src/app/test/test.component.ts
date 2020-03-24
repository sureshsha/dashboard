import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem, GridsterItemComponent } from 'angular-gridster2';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  visibility: string[];
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



  ngOnInit() {
this.options = this.layoutService.options;
console.log(this.options.draggable.enabled);
this.visibility = this.layoutService.visibility;
  }
}
