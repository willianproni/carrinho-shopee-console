//Valor do item sobre sua quantidade

export const createItem = async (itemName, price, quantity) => {
  const newItem = {
    name: itemName,
    price: price,
    quantity: quantity,
    subtotal: price * quantity,
  };

  return newItem;
};
