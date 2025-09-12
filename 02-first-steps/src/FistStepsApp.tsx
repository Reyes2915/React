import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const ItemsInCart: ItemInCart[] = [
  { productName: "Nintendo Switch 2", quantity: 1 },
  { productName: "Pro Controller", quantity: 2 },
  { productName: "Mario Kart", quantity: 5 },
];

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras</h1>

      {ItemsInCart.map((item) => (
        <ItemCounter
          key={item.productName}
          name={item.productName}
          quantity={item.quantity}
        ></ItemCounter>
      ))}

      {/* <ItemCounter name="Nintendo Switch 2" quantity={1}></ItemCounter>
      <ItemCounter name="Pro Controller" quantity={2}></ItemCounter>
      <ItemCounter name="Mario Kart" quantity={1}></ItemCounter> */}
      {/* <p>Esto es un párrafo</p>
      <button>Click me</button>
      <div>
        <h2>Hola dentro de un div</h2>
      </div> */}
    </>
  );
}
