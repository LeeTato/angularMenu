import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu-item-list',
  templateUrl: './menu-item-list.component.html',
  styleUrls: ['./menu-item-list.component.scss']
})
export class MenuItemListComponent implements OnInit {

  constructor(
    public menuService:MenuService
  ) { }

  ngOnInit(): void {
  }

}
