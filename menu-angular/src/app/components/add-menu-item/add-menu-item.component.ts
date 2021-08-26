import { Component, OnInit } from '@angular/core';
import { Router, RouteReuseStrategy } from '@angular/router';
import { MenuItem, MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-add-menu-item',
  templateUrl: './add-menu-item.component.html',
  styleUrls: ['./add-menu-item.component.scss']
})
export class AddMenuItemComponent implements OnInit {
name: string = '';
price: number = 0;
  constructor(
    private router:Router,
    public menuService:MenuService,
  ) { }

  ngOnInit(): void {
  }

  addMenuItem(){
   this.menuService.addMenuItem(new MenuItem(this.name,this.price))
   this.router.navigate(['about'])
 }
}