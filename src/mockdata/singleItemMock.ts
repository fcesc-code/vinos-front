import { IWineItem } from 'src/interfaces/items.interfaces';

const wineSingleMockData: IWineItem = {
  title : 'Example Wine',
  year : 2009,
  grapes : 'Merlot',
  country : 'Italy',
  region : 'Lombardy',
  description : 'A taste from roman gods.',
  price : 20.50,
  imageUrl : './assets/wine_example.png',
  isOnSale : true,
  quantityInChart : 0,
  foodMatch: [
    {
      name: 'Manchego cheese',
      kcal: 320,
      vegan: false,
      gluten: false
    },
    {
      name: 'Jamón Ibérico',
      kcal: 450,
      vegan: false,
      gluten: false
    }
  ]
};

export { wineSingleMockData };