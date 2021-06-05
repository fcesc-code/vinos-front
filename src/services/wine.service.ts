import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IWineItem } from '../interfaces/items.interfaces';

import { mockWines } from '../mockdata/winedata';

@Injectable({
  providedIn: 'root'
})
export class WineService {
  private wineItemsLast: IWineItem[] | [] = [];
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
      _id: this.wineItems.length
    }
    this.cacheLastState();
    this.wineItems.push(newWine);
  }

  public deleteWine( wineId: number ): void {
    this.cacheLastState();
    this.wineItems = [ ...this.wineItems.filter( ({ _id }) => _id !== wineId ) ];
  }

  public getWine( wineId: number ): Observable<IWineItem | undefined> {
    return of(this.wineItems.find( ({ _id }) => _id === wineId ))
  }

  public editWine( wine: IWineItem ): void {
    const editedWine: IWineItem = {
      ...wine
    }
    this.cacheLastState();
    this.wineItems = [ ...this.wineItems.map( wine => ( wine._id === editedWine._id ) ? editedWine : wine ) ];
  }

  public changeQuantity( wineId: number, newQuantity: number ): void {
    this.cacheLastState();
    const selectedWine = this.wineItems.find( ({_id}) => _id === wineId );
    if( selectedWine ){
      selectedWine.quantityInCart = newQuantity;
    }
  }

  private cacheLastState(): void{
    this.wineItemsLast = this.wineItems;
  }

  public undo(): void{
    this.wineItems = this.wineItemsLast;
  }

}
