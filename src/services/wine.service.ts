import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IWineItem } from '../interfaces/items.interfaces';

import { mockWines } from '../mockdata/winedata';

@Injectable({
  providedIn: 'root'
})
export class WineService {
  protected wineItems: IWineItem[];

  constructor() {
    this.wineItems = mockWines;
  }

  public getWines(): Observable<IWineItem[]> {
    return of(this.wineItems);
  }

  public createWine( wine: IWineItem ): void {
    const newWine = {
      ...wine,
      id: this.wineItems.length + 1
    }
    console.warn('SERVICE-create / pre:', this.wineItems.length);
    this.wineItems.push(newWine);
    console.warn('SERVICE-create / post', this.wineItems.length );
  }

  public deleteWine( wineId: number ): void {
    this.wineItems = [ ...this.wineItems.filter( ({ _id }) => _id !== wineId ) ];
  }

  public getWine( wineId: number ): Observable<IWineItem | undefined> {
    return of(this.wineItems.find( ({ _id }) => _id === wineId ))
  }

  public editWine( wine: IWineItem ): void {
    const editedWine: IWineItem = {
      ...wine
    }
    this.wineItems = [ ...this.wineItems.map( wine => ( wine._id === editedWine._id ) ? editedWine : wine ) ];
  }

  public changeQuantity( wineId: number, newQuantity: number ): void {
    const selectedWine = this.wineItems.find( ({_id}) => _id === wineId );
    if( selectedWine ){
      selectedWine.quantityInCart = newQuantity;
    }
  }

}
