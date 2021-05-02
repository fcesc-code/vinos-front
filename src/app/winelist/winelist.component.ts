import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IWineItem, IProductChange } from 'src/interfaces/items.interfaces';
import { ProductsService } from './../../services/products.service';

@Component({
  selector: 'app-winelist',
  templateUrl: './winelist.component.html',
  styleUrls: ['./winelist.component.sass']
})
export class WinelistComponent implements OnInit, OnDestroy {
  public products: IWineItem[] = [];
  public filteredProducts: IWineItem[] = [];
  public errorMessage:string = '';
  public sub!: Subscription;

  constructor(
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.sub = this.productsService.getProducts().subscribe({
      next: products => {
        this.products = [ ...products ];
        this.filteredProducts = [ ...products ];
      },
      error: error => this.errorMessage = error
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onWineQuantityChange( WineQuantityChange: IProductChange ) {
    const selectedWine = this.products.find( wine => wine._id === WineQuantityChange.id );
    const filteredWine = this.products.find( wine => wine._id === WineQuantityChange.id );
    if (selectedWine) selectedWine.quantityInCart = WineQuantityChange.newQuantity;
    if (filteredWine) filteredWine.quantityInCart = WineQuantityChange.newQuantity;
  }
}
