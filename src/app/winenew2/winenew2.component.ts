import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IWineItem } from '../../interfaces/items.interfaces';

@Component({
  selector: 'app-winenew2',
  templateUrl: './winenew2.component.html',
  styleUrls: ['./winenew2.component.sass']
})

export class Winenew2Component {
  public newWineForm: FormGroup;
  public wine: IWineItem;
  public messages = {
    createError: 'Something went wrong when creating the form. Please, check your data before submitting.',
    createSuccess: 'Wine was created successfully',
    classError: 'messsage message--error',
    classSuccess: 'messsage message--success',
    current: '',
    class: ''
  }
  private URLpattern = new RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/);
  private Namepattern = new RegExp(/`Laya|K-Naina|Verdejo|Monastrell`/);

  constructor( private formBuilder: FormBuilder ) {
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
    this.newWineForm = this.createNewWineForm();
  }

  private createNewWineForm(){
    return this.formBuilder.group({
      imgUrl: [
        '',
        [Validators.required,
        Validators.pattern(this.URLpattern)]
      ],
      title: [
        '',
        [Validators.required,
        Validators.pattern(this.Namepattern)]
      ],
      year: [
        0,
        Validators.required
      ],
      grapes: '',
      country: '',
      motto: '',
      price: [
        0,
        [Validators.required,
        Validators.min(1)]
      ],
      rating: [
        '', 
        [Validators.min(1),
        Validators.max(5)]
      ],
      isOnSale: false,
      foodMatch: '',
      foodKcal: 0,
      foodVegan: false,
      foodGluten: false
    });
  }

  public createWine(){
    if (this.newWineForm.invalid) {
      this.messages.current = this.messages.createError;
      this.messages.class = this.messages.classError;
    } else {
      this.messages.current = this.messages.createSuccess;
      this.messages.class = this.messages.classSuccess;
      this.wine = this.newWineForm.value;
      console.warn('PAC5 temporary. This is the new wine', this.wine);
    }
  }

}