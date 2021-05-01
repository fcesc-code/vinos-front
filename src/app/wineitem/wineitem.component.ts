import { Component, Input, OnInit } from '@angular/core';
import { IWineItem } from '../../interfaces/items.interfaces';
import { wineSingleMockData } from '../../mockdata/singleItemMock';

@Component({
  selector: 'app-wineitem',
  templateUrl: './wineitem.component.html',
  styleUrls: ['./wineitem.component.sass']
})

export class WineitemComponent implements OnInit {

  @Input() public wine: IWineItem;
  public quantityInChart: number;
  public totalAmount: number;
  public quantitySelector: number[];
  public wineRegionMapLink: string;

  constructor() {
    this.quantityInChart = 0;
    this.totalAmount = 0;
    this.quantitySelector = Array.from(Array(20).keys());
    this.wineRegionMapLink = '';
    this.wine = wineSingleMockData;
  }

  ngOnInit() {
    this.wineRegionMapLink = `https://www.google.com/maps/place/${this.wine.region}`;
  }

  public increaseAmount(): void {
    this.quantityInChart++;
    this.totalAmount = this.wine.price * this.quantityInChart;
  }

  public decreaseAmount(): void {
    if (this.quantityInChart > 0) this.quantityInChart--;
    this.totalAmount = this.wine.price * this.quantityInChart;
  }

  public updateQuantity(input: number): void {
    this.quantityInChart = input;
    this.totalAmount = this.wine.price * this.quantityInChart;
  }
}