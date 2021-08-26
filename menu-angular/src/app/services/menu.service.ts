import { Injectable } from '@angular/core';

export class MenuItem{   
  name: string = '';
  price:number = 0;
  constructor(name:string, price:number){
    this.name = name;
    this.price = price;
  }
}




@Injectable({
  providedIn: 'root'
})
export class MenuService {
 menuItems: MenuItem[] = [];

  constructor() { }
  
  addMenuItem(menuItem:MenuItem){
    this.menuItems.push(menuItem)
  }
}
