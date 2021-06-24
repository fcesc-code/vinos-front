import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  share,
  startWith,
  switchMap,
} from "rxjs/internal/operators";
import { IWineItem, IProductChange } from 'src/interfaces/items.interfaces';
import { WineService } from '../../services/wine.service';

@Component({
  selector: 'app-winelist',
  templateUrl: './winelist.component.html',
  styleUrls: ['./winelist.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WinelistComponent {
  public wines$: Observable<IWineItem[]>;
  public searchString: string = '';
  private searchTerms: Subject<string> = new Subject();

  constructor(
    private wineService: WineService
  ) { 
    this.wines$ = this.wineService.getWines();
  }

  ngOnInit(): void {
    this.getQueryWines();
  }

  onWineQuantityChange( WineQuantityChange: IProductChange ): void {
    this.wineService.changeQuantityInCart( WineQuantityChange.id, WineQuantityChange.newQuantity);
  }

  search() {
    console.log(`Current query string: '${this.searchString}'`)

    this.searchTerms.next( this.searchString );
  }

  getQueryWines() {
    this.wines$ = this.searchTerms.pipe(
      startWith(this.searchString),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap( (query: string) => { return ( query && query.trim() !== '' ) ? this.wineService.getWinesQuery(query) : this.wineService.getWines() } ),
      share()
    );
  }
}
