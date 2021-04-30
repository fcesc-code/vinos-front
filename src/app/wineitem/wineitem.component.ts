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
  public quantityInChart: number;
  public totalAmount: number;

  constructor() {
    this.wine = wineSingleMockData;
    this.quantityInChart = 0;
    this.totalAmount = 0;
  }

  ngOnInit() {
  }

  public increaseAmount(): void {
    this.wine.quantityInChart++;
    this.quantityInChart++;
    this.totalAmount = this.wine.price * this.quantityInChart;
  }

  public decreaseAmount(): void {
    if (this.wine.quantityInChart !== 0) this.wine.quantityInChart--;
    if (this.quantityInChart > 0) this.quantityInChart--;
    this.totalAmount = this.wine.price * this.quantityInChart;
  }

}