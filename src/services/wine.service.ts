import { Injectable } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { IWineItem } from '../interfaces/items.interfaces';

import { mockWines } from '../mockdata/winedata';

@Injectable({
  providedIn: 'root'
})
export class WineService {
  private wineItemsLast: IWineItem[] | [] = [];
  protected wineItems: IWineItem[];

  constructor() {
    this.wineItems = [ ...mockWines ];
  }

  public getWines(): Observable<IWineItem[]> {
    return of(this.wineItems);
  }

  public createWine( wine: IWineItem ): Observable<IWineItem> {
    const newWine = {
      ...wine,
      _id: this.wineItems.length
    }
    this.cacheLastState();
    this.wineItems.push(newWine);
    return of(newWine);
  }

  public deleteWine( wineId: number ): Observable<IWineItem[]> {
    this.cacheLastState();
    this.wineItems = [ ...this.wineItems.filter( ({ _id }) => _id !== wineId ) ];
    return of(this.wineItems);
  }

  public getWine( wineId: number ): Observable<IWineItem | undefined> {
    return of(this.wineItems.find( ({ _id }) => _id === wineId ))
  }

  public editWine( wine: IWineItem ): Observable<IWineItem[]> {
    const editedWine: IWineItem = {
      ...wine
    }
    this.cacheLastState();
    this.wineItems = [ ...this.wineItems.map( wine => ( wine._id === editedWine._id ) ? editedWine : wine ) ];
    return of(this.wineItems);
  }

  public changeQuantity( wineId: number, newQuantity: number ): Observable<IWineItem> {
    this.cacheLastState();
    const selectedWine = this.wineItems.find( ({_id}) => _id === wineId );
    if( selectedWine ){
      selectedWine.quantityInCart = newQuantity;
    }
    return (selectedWine) ? of(selectedWine) : EMPTY;
  }

  private cacheLastState(): void{
    this.wineItemsLast = this.wineItems;
  }

  public undo(): void{
    this.wineItems = this.wineItemsLast;
  }

}
