import { Component, OnInit } from '@angular/core';
import { IWineItem } from 'src/interfaces/items.interfaces';
import { ProductsService } from './../../services/products.service';

@Component({
  selector: 'app-winelist',
  templateUrl: './winelist.component.html',
  styleUrls: ['./winelist.component.sass']
})
export class WinelistComponent implements OnInit {
  public products: IWineItem[] = [];
  public errorMessage:string = '';
  public sub: any;

  constructor(
    private productsService: ProductsService
  ) { 
  }

  ngOnInit(): void {
    this.sub = this.productsService.getProducts().subscribe({
      next: products => this.products = products,
      error: error => this.errorMessage = error
    });
  }

  ngOnDestroy(): void {
    this.sub.unsuscribe();
  }

}
