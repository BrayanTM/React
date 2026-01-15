import { ItemCounter } from "./shopping-cart/ItemCounter";

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de Compras</h1>
      <ItemCounter name="Nintendo Switch 2" quantity={4} />
      <ItemCounter name="Logitech MX Masters 4" quantity={6} />
      <ItemCounter name="Intel Ultra 9" quantity={3} />
      <ItemCounter name="Silla Secret Lab" quantity={8} />
    </>
  );
}
