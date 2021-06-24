import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IWineItem } from '../interfaces/items.interfaces';

import { API_ENDPOINT } from '../api/conifg';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WineService {
  private api: string = '';
  
  constructor(
    private http: HttpClient
    ) { 
      this.api = API_ENDPOINT;
    }

  public getWines(): Observable<IWineItem[]> {
    this.http.post(this.api, { something: 'yes' })
    return this.http.get<IWineItem[]>(this.api)
      .pipe( retry(2),
        catchError(this.handleError) 
      )
  }

  public getWinesQuery( query: string ): Observable<IWineItem[]> {
    const formattedQuery = query.trim().toLowerCase();
    const queryParameters = { params: { q: formattedQuery } };
    return (formattedQuery && formattedQuery !== '')
      ? this.http.get<IWineItem[]>(`${this.api}`, queryParameters)
        .pipe( retry(2),
          catchError(this.handleError) 
        )
      : this.getWines();
  }

  public getPaginatedWines( page: number ): Observable<IWineItem[]> {
    console.warn('wineService -> getPaginatedWines called')
    return this.http.get<IWineItem[]>(`${this.api}/page/${page}`)
      .pipe( retry(2),
        catchError(this.handleError) 
      )
  }

  public getWine( wineId: number ): Observable<IWineItem> {
    console.warn('wineService -> getWine called')
    return this.http.get<IWineItem>(`${this.api}/${wineId}`)
      .pipe( retry(2),
        catchError(this.handleError) 
      )
  }

  public createWine( wine: IWineItem ): Observable<IWineItem> {
    console.warn('wineService -> createWine called with:', wine)
    return this.http.post<IWineItem>(this.api, wine)
      .pipe( catchError(this.handleError) )
  }

  public deleteWine( wineId: number ): Observable<Object> {
    console.warn('wineService -> deleteWine called')
    return this.http.delete<Object>(`${this.api}/${wineId}`)
      .pipe( catchError(this.handleError) )
  }

  public getFilteredWines( parameter: string, value: string ): Observable<IWineItem[]> {
    console.warn('wineService -> getFilteredWines called')
    return this.http.get<IWineItem[]>(`${this.api}/${parameter}/${value}`)
      .pipe( retry(2),
        catchError(this.handleError) 
      )
  }

  public editWine( wine: IWineItem ): Observable<IWineItem> {
    console.warn('wineService -> editWine called')
    return this.http.patch<IWineItem>(`${this.api}/edit`, wine)
      .pipe( catchError(this.handleError) )
  }

  public changeQuantityInCart( wineId: number, newQuantity: number ): Observable<IWineItem> {
    console.warn('wineService -> changeQuantityInCart called')
    return this.http.patch<IWineItem>(`${this.api}/${wineId}`, { quantityInCart: newQuantity })
      .pipe( catchError(this.handleError) )
  }

  private handleError( error: HttpErrorResponse ){
    ( error.status === 0 )
      // A client-side or network error occurred.
      ? console.error(`An error ocurred:`, error.error)
      // The backend returned an unsuccessful response code. The response body main contain clues as to what went wrong.
      : console.error(`Backend returned code ${error.status}, \nbody was: ${error.error}`)
    // return an observable with a user-facing error message
    return throwError(`Something bad happened; please try again later.`);
  }

}
