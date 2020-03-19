import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-edit-layout',
  templateUrl: './edit-layout.component.html',
  styleUrls: ['./edit-layout.component.scss']
})
export class EditLayoutComponent implements OnInit {

  get options(): GridsterConfig {
    return this.layoutService.options;

  }
  get layout(): GridsterItem[] {
    return this.layoutService.layout;
  }

  constructor(
    private layoutService: LayoutService
  ) { }


  ngOnInit() {
  }

}
