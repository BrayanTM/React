import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  { productName: "Nintendo Switch 2", quantity: 1 },
  { productName: "Logitech MX Masters 4", quantity: 5 },
  { productName: "Intel Ultra 9", quantity: 3 },
  { productName: "Silla Secret Lab", quantity: 8 },
  { productName: "Play Station 6", quantity: 8 },
];

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de Compras</h1>
      {itemsInCart.map(({ productName, quantity }) => (
        <ItemCounter key={productName} name={productName} quantity={quantity} />
      ))}
      {/* <ItemCounter name="Nintendo Switch 2" quantity={4} />
      <ItemCounter name="Logitech MX Masters 4" quantity={6} />
      <ItemCounter name="Intel Ultra 9" quantity={3} />
      <ItemCounter name="Silla Secret Lab" quantity={8} /> */}
    </>
  );
}
