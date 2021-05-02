import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IWineItem, IProductChange } from '../../interfaces/items.interfaces';

@Component({
  selector: 'app-wineitem',
  templateUrl: './wineitem.component.html',
  styleUrls: ['./wineitem.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class WineitemComponent implements OnInit {

  @Input() public wine: IWineItem;
  @Output() public wineQuantityChange: EventEmitter<IProductChange> = new EventEmitter();
  public totalAmount: number = 0;
  public wineRegionMapLink: string  = '';

  constructor() {
    this.wine = {
      _id: 0,
      title: '',
      year: 0,
      grapes: '',
      country: '',
      region: '',
      description: '',
      price: 0,
      imageUrl: '',
      isOnSale: false,
      quantityInCart: 0,
      foodMatch: []
    }
  }

  ngOnInit() {
    this.wineRegionMapLink = `https://www.google.com/maps/place/${this.wine.region}`;
    this.totalAmount = this.wine.price * this.wine.quantityInCart;
  }

  private getChange(): IProductChange {
    return { id: this.wine._id, newQuantity: this.wine.quantityInCart }
  }

  public increaseAmount(): void {
    this.wine.quantityInCart++;
    this.totalAmount = this.wine.price * this.wine.quantityInCart;
    this.wineQuantityChange.emit( this.getChange() );
  }

  public decreaseAmount(): void {
    if (this.wine.quantityInCart > 0) this.wine.quantityInCart--;
    this.totalAmount = this.wine.price * this.wine.quantityInCart;
    this.wineQuantityChange.emit( this.getChange() );
  }

}