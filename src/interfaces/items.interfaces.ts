export interface IWineItem {
  _id: number;
  title: string;
  year: number;
  grapes: string;
  country: string;
  region: string;
  description: string;
  price: number;
  imageUrl: string;
  isOnSale: boolean;
  quantityInChart: number;
  foodMatch: IFoodItem[];
}

interface IFoodItem {
  name: string;
  kcal: number;
  vegan: boolean;
  gluten: boolean;
}

export interface IProductChange {
  id: string,
  newQuantity: number
}