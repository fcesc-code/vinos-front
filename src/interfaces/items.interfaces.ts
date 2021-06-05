export interface IWineItem {
  _id: number;
  name: string;
  year: number;
  rating: number;
  grapes: string;
  country: string;
  region: string;
  description: string;
  price: number;
  imageUrl: string;
  isOnSale: boolean;
  quantityInCart: number;
  foodMatch: IFoodItem[];
}

interface IFoodItem {
  name: string;
  kcal: number;
  vegan: boolean;
  gluten: boolean;
}

export interface IProductChange {
  id: number,
  newQuantity: number
}