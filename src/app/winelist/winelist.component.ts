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
    this.wineService.changeQuantity( WineQuantityChange.id, WineQuantityChange.newQuantity);
  }

  search() {
    this.searchTerms.next( this.searchString );
  }

  getQueryWines() {
    console.log(`Current query string: '${this.searchString}'`)
    this.wines$ = ( this.searchString && this.searchString !== '' ) 
      ? this.searchTerms.pipe(
        startWith(this.searchString),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap( (query: string) => this.wineService.getWinesQuery(query) ),
        share()
        )
      : this.wineService.getWines();
  }
}
