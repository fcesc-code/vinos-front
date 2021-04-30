import { Component, OnInit } from '@angular/core';
import { IWineItem } from '../../interfaces/items.interfaces';
import { wineSingleMockData } from '../../mockdata/singleItemMock';

@Component({
  selector: 'app-wineitem',
  templateUrl: './wineitem.component.html',
  styleUrls: ['./wineitem.component.sass']
})

export class WineitemComponent implements OnInit {

  public wine: IWineItem;

  constructor() {
    this.wine = wineSingleMockData;
  }

  ngOnInit() {
  }

  public increaseAmount(): void {
    this.wine.quantityInChart++;
  }

  public decreaseAmount(): void {
    if (this.wine.quantityInChart !== 0) this.wine.quantityInChart--;
  }

}