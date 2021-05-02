import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.sass']
})
export class StarComponent implements OnChanges {
  @Input() public rating: number = 0;
  public stars = {
    s1: 'star__icon--empty',
    s2: 'star__icon--empty',
    s3: 'star__icon--empty',
    s4: 'star__icon--empty',
    s5: 'star__icon--empty'
  };

  ngOnChanges(): void {
    if (this.rating >= 5) this.stars.s5 = 'star__icon--full';
    if (this.rating >= 4) this.stars.s4 = 'star__icon--full';
    if (this.rating >= 3) this.stars.s3 = 'star__icon--full';
    if (this.rating >= 2) this.stars.s2 = 'star__icon--full';
    if (this.rating >= 1) this.stars.s1 = 'star__icon--full';
    if (this.rating < 5 && this.rating > 4) this.stars.s5 = 'star__icon--half';
    if (this.rating < 4 && this.rating > 3) this.stars.s4 = 'star__icon--half';
    if (this.rating < 3 && this.rating > 2) this.stars.s3 = 'star__icon--half';
    if (this.rating < 2 && this.rating > 1) this.stars.s2 = 'star__icon--half';
    if (this.rating < 1) this.stars.s1 = 'star__icon--half';
  }
}
