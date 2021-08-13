import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  merge,
  share,
  startWith,
  switchMap,
} from 'rxjs/operators';
import { IWineItem, IProductChange } from 'src/interfaces/items.interfaces';
import { WineService } from '../../services/wine.service';

@Component({
  selector: 'app-winelist',
  templateUrl: './winelist.component.html',
  styleUrls: ['./winelist.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WinelistComponent  implements OnInit {
  public wines$: Observable<IWineItem[]>;
  public searchString = '';
  private searchTerms: Subject<string> = new Subject();
  private reloadWineList: Subject<string> = new Subject();

  constructor(
    private wineService: WineService
  ){
    this.wines$ = this.wineService.getWines();
  }

  ngOnInit(): void {
    this.getQueryWines();
  }

  onWineQuantityChange( WineQuantityChange: IProductChange ): void {
    this.wineService.changeQuantityInCart( WineQuantityChange.id, WineQuantityChange.newQuantity);
  }

  search(): void {
    console.log(`Current query string: '${this.searchString}'`);

    this.searchTerms.next( this.searchString );
  }

  getQueryWines(): void {
    this.wines$ = this.searchTerms.pipe(
      startWith(this.searchString),
      debounceTime(500),
      distinctUntilChanged(),
      merge(this.reloadWineList),
      switchMap(
        (query: string) => (query && query.trim() !== '') ? this.wineService.getWinesQuery(query) : this.wineService.getWines()
      ),
      share()
    );
  }

  onNew(): void {
    this.reloadWineList.next('1');
  }

}
