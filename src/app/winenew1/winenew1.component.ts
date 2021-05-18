import { Component } from '@angular/core';
import { IWineItem } from '../../interfaces/items.interfaces';

@Component({
  selector: 'app-winenew1',
  templateUrl: './winenew1.component.html',
  styleUrls: ['./winenew1.component.sass']
})

export class Winenew1Component {
  public wine: IWineItem;
  public messages = {
    createError: 'Something went wrong when creating the form. Please, check your data before submitting.',
    createSuccess: 'Wine was created successfully',
    classError: 'messsage message--error',
    classSuccess: 'messsage message--success',
    current: '',
    class: ''
  }

  constructor() {
    this.wine = {
      _id: 0,
      title: '',
      year: 0,
      rating: 0,
      grapes: '',
      country: '',
      region: '',
      description: '',
      price: 0,
      imageUrl: '',
      isOnSale: false,
      quantityInCart: 0,
      foodMatch: []
    }
  }

  public createWine(wineForm: any){
    if (wineForm.invalid) {
      this.messages.current = this.messages.createError;
      this.messages.class = this.messages.classError;
    } else {
      this.messages.current = this.messages.createSuccess;
      this.messages.class = this.messages.classSuccess;
      this.wine = wineForm.value.newWine;
    }
  }

}