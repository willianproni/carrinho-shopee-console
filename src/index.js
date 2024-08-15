import { createItem } from "./services/item.js";
import {
  calculateTotalLittleCart,
  deleteItemLittleCart,
  displayCart,
  postNewItemLittleCart,
  removeItemLittleCart,
} from "./services/little_cart.js";

const little_cart = [];

console.log("Bem vindo ao seu carrinho da Shoppe");

const main = async () => {
  const newItem = await createItem("Chocolate", 2, 4);
  const newItem2 = await createItem("Carro", 10, 2);

  await postNewItemLittleCart(little_cart, newItem);
  await postNewItemLittleCart(little_cart, newItem2);

  await displayCart(little_cart);

  await removeItemLittleCart(little_cart, newItem2.name);

  await displayCart(little_cart);

  const valueTotalCart = await calculateTotalLittleCart(little_cart);

  console.log(`Valor total do seu carrinho é:`, valueTotalCart);
};

await main();
