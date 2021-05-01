import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IWineItem } from '../interfaces/items.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public items: IWineItem[] = [];
  private mockdataUrl: string = 'mockdata/winedata.json';

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(){
    this.getProducts();
  }

  public getProducts(): Observable<IWineItem[]> {
    return this.http.get<IWineItem[]>(this.mockdataUrl)
      .pipe(
        catchError( this.handleError )
      );
  }

  private handleError( err: HttpErrorResponse ){
    let errorMessage = '';
    (err.error instanceof ErrorEvent)
      ? errorMessage = `An error ocurred: ${err.error.message}`
      : errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
