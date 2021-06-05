import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
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

  constructor(
    private wineService: WineService
  ) { 
    this.wines$ = this.wineService.getWines();
  }

  ngOnInit(): void {
    this.wines$ = this.wineService.getWines();
  }

  onWineQuantityChange( WineQuantityChange: IProductChange ): void {
    this.wineService.changeQuantity( WineQuantityChange.id, WineQuantityChange.newQuantity);
  }
}
