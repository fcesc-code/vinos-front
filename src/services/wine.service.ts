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
    return this.http.get<IWineItem[]>(this.api)
  }

  public getWine( wineId: number ): Observable<IWineItem> {
    return this.http.get<IWineItem>(`${this.api}/${wineId}`)
  }

  public createWine( wine: IWineItem ): Observable<IWineItem> {
    return this.http.post<IWineItem>(this.api, wine)
  }

  public deleteWine( wineId: number ): Observable<Object> {
    return this.http.delete<Object>(`${this.api}/${wineId}`)
  }

  public getFilteredWines( parameter: string, value: string ): Observable<IWineItem[]> {
    return this.http.get<IWineItem[]>(`${this.api}/${parameter}/${value}`)
  }

  public editWine( wine: IWineItem ): Observable<IWineItem> {
    return this.http.patch<IWineItem>(`${this.api}/edit/${wine._id}`, wine)
  }

  public editQuantity( wineId: number, newQuantity: number ): Observable<IWineItem> {
    return this.http.patch<IWineItem>(`${this.api}/${wineId}`, { quantityInCart: newQuantity })
  }

}
