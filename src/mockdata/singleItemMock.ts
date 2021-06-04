import { IWineItem } from 'src/interfaces/items.interfaces';

const wineSingleMockData: IWineItem[] = [{
  "_id": 1,
  "title": "CHATEAU DE SAINT COSME",
  "year": 2009,
  "rating": 5,
  "grapes": "Grenache / Syrah",
  "country": "France",
  "region": "Southern Rhone",
  "description": "The aromas of fruit and spice give one a hint of the light drinkability of this lovely wine, which makes an excellent complement to fish dishes.",
  "price": 16.75, 
  "isOnSale": true, 
  "quantityInCart": 0, 
  "foodMatch": [
    {
      "name": "Manchego cheese",
      "kcal": 320,
      "vegan": false,
      "gluten": false
    },
    {
      "name": "Jamón Ibérico",
      "kcal": 450,
      "vegan": false,
      "gluten": false
    }
  ], 
  "imageUrl": "wine_example.png"
}];

export { wineSingleMockData };