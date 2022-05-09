declare type Menu = "Lanches" | "Pizzas" | "Bebidas" | "Ofertas";
declare interface MenuItem {
  name: string;
  description: string;
  images: {
    medium: string;
    small: string;
  };
  price: string;
  _id: number;
}
declare type TGetProducts = {
  Lanches: MenuItem[];
  Pizzas: MenuItem[];
  Bebidas: MenuItem[];
  Ofertas: MenuItem[];
}