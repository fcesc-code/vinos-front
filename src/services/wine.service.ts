import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWineItem } from '../interfaces/items.interfaces';

import { API_ENDPOINT } from '../api/conifg';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WineService {
  private api: string = API_ENDPOINT;

  constructor(
    private http: HttpClient
  ) { }

  public getWines(): Observable<IWineItem[]> {
    return this.http.get<IWineItem[]>(this.api);
  }

  public createWine( wine: IWineItem ): Observable<IWineItem> {
    return this.http.post<IWineItem>(this.api, wine)
  }

  // public deleteWine( wineId: number ): Observable<IWineItem[]> {
  //   this.cacheLastState();
  //   this.wineItems = [ ...this.wineItems.filter( ({ _id }) => _id !== wineId ) ];
  //   return of(this.wineItems);
  // }

  // public getWine( wineId: number ): Observable<IWineItem | undefined> {
  //   return of(this.wineItems.find( ({ _id }) => _id === wineId ))
  // }

  // public editWine( wine: IWineItem ): Observable<IWineItem[]> {
  //   const editedWine: IWineItem = {
  //     ...wine
  //   }
  //   this.cacheLastState();
  //   this.wineItems = [ ...this.wineItems.map( wine => ( wine._id === editedWine._id ) ? editedWine : wine ) ];
  //   return of(this.wineItems);
  // }

  public changeQuantity( wineId: number, newQuantity: number ): Observable<IWineItem> {
    return this.http.patch<IWineItem>(`${this.api}/${wineId}`, { quantityInCart: newQuantity });
  }

}
