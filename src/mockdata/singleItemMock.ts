import { IWineItem, IFoodItem } from 'src/app/interfaces/items.interfaces';

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
  quantityInChart : 0
};

const foodSingleMockData: IFoodItem = {
  name: 'Manchego cheese',
  kcal: 320,
  vegan: false,
  gluten: false
}

export default { wineSingleMockData, foodSingleMockData };