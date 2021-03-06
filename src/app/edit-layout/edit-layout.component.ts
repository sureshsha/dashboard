import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { LayoutService } from '../services/layout.service';
import { ActivatedRoute, Routes, Router} from '@angular/router';

@Component({
  selector: 'app-edit-layout',
  templateUrl: './edit-layout.component.html',
  styleUrls: ['./edit-layout.component.scss']
})
export class EditLayoutComponent implements OnInit {
 visibility: string[];
  get options(): GridsterConfig {
    return this.layoutService.options;

  }
  get layout(): GridsterItem[] {
    return this.layoutService.editLayout;
  }

  constructor(
    private layoutService: LayoutService,
    private router: ActivatedRoute,
    private route: Router
  ) { }


  ngOnInit() {
    this.visibility = this.layoutService.editVisibility;

  }

}
