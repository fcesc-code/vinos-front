export interface IWineItem {
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
}

export interface IFoodItem {
  name: string;
  kcal: number;
  vegan: boolean;
  gluten: boolean;
}