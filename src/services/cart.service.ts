import { Injectable } from '@angular/core';
import { IWineItem } from './../interfaces/items.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public items: any;

  constructor() {
  }
}
