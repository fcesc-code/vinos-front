import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IWineItem } from '../interfaces/items.interfaces';

@Injectable({
  providedIn: 'root'
})
export class WineService {
  // public wineItems: IWineItem[];
  public wines$: Observable<IWineItem[]>;
  private mockdataUrl: string = 'mockdata/winedata.json';

  constructor(
    private http: HttpClient
  ) {
    this.wines$ = this.createWinesObservable();
  }

  private createWinesObservable(): Observable<IWineItem[]> {
    return this.http.get<IWineItem[]>(this.mockdataUrl)
      .pipe(
        catchError( this.handleError )
      )
  }

  // public getWines(): Observable<IWineItem[]> {
  //   return of(this.wineItems);
  // }

  // public createWine( wine: IWineItem ): void {
  //   const newWine = {
  //     ...wine,
  //     id: this.wineItems.length + 1
  //   }
  //   this.wineItems.push(newWine);
  // }

  // public deleteWine( wineId: number ): void {
  //   this.wineItems = [ ...this.wineItems.filter( ({ _id }) => _id !== wineId ) ];
  // }

  // public getWine( wineId: number ): Observable<IWineItem | undefined> {
  //   return of(this.wineItems.find( ({ _id }) => _id === wineId ))
  // }

  // public editWine( wine: IWineItem ): void {
  //   const editedWine = {
  //     ...wine
  //   }
  //   this.wineItems = [ ...this.wineItems.map( wine => ( wine._id === editedWine._id ) ? editedWine : wine ) ];
  // }

  // public changeQuantity( wineId: number, newQuantity: number ): void {
  //   const selectedWine = this.wineItems.find( ({_id}) => _id === wineId );
  //   if( selectedWine ){
  //     selectedWine.quantityInCart = newQuantity;
  //     this.editWine( selectedWine );
  //   }
  // }

  private handleError( err: HttpErrorResponse ){
    let errorMessage = '';
    (err.error instanceof ErrorEvent)
      ? errorMessage = `An error ocurred: ${err.error.message}`
      : errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
