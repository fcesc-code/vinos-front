import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IWineItem, IProductChange } from 'src/interfaces/items.interfaces';
import { WineService } from './../../services/wine.service';
// import { ProductsService } from './../../services/products.service';

@Component({
  selector: 'app-winelist',
  templateUrl: './winelist.component.html',
  styleUrls: ['./winelist.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WinelistComponent {
  public products: IWineItem[] = [];
  public wines$: Observable<IWineItem[]>;
  public errorMessage:string = '';
  // public sub!: Subscription;

  constructor(
    // private productsService: ProductsService,
    private wineService: WineService
  ) {
    this.wines$ = this.wineService.wines$;
  }

  // ngOnInit(): void {
  //   this.sub = this.productsService.getProducts().subscribe({
  //     next: products => {
  //       this.products = [ ...products ];
  //       this.filteredProducts = [ ...products ];
  //     },
  //     error: error => this.errorMessage = error
  //   });
  // }

  // ngOnDestroy(): void {
  //   this.sub.unsubscribe();
  // }

  onWineQuantityChange( WineQuantityChange: IProductChange ) {
    const selectedWine = this.products.find( wine => wine._id === WineQuantityChange.id );
    const filteredWine = this.products.find( wine => wine._id === WineQuantityChange.id );
    if (selectedWine) selectedWine.quantityInCart = WineQuantityChange.newQuantity;
    if (filteredWine) filteredWine.quantityInCart = WineQuantityChange.newQuantity;
  }
}
