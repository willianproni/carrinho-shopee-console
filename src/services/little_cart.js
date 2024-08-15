//Salvar itens

//Adicionar item

export const postNewItemLittleCart = async (userCart, item) => {
  userCart.push(item);
};

//Remover item

export const removeItemLittleCart = async (userCart, itemName) => {
  const indexItem = userCart.findIndex((item) => item.name === itemName);

  if (!indexItem) {
    console.log("item não encontrado");
    return;
  }

  if (userCart[indexItem].quantity > 1) {
    userCart[indexItem].quantity--;
    return;
  }

  if (userCart[indexItem].quantity === 1) {
    deleteItemLittleCart(userCart, itemName);
    return;
  }
};

//Deletar item do carrinho

export const deleteItemLittleCart = async (userCart, itemName) => {
  const indexItem = userCart.findIndex((item) => item.name === itemName);

  if (indexItem !== -1) {
    userCart.splice(indexItem, 1);
  }
};

//Exibir itens do carrinho

export const displayCart = async (userCart) => {
  console.log("\nSeu carrinho:");

  userCart.forEach((item, index) => {
    console.log(
      `\n${index + 1} - ${item.name} | Quantidade: ${item.quantity} | Valor: ${
        item.price
      } = Valor total em item: ${item.subtotal}`
    );
  });
};

//Calcular valor total do carrinho

export const calculateTotalLittleCart = async (userCart) => {
  const sumTotalCart = userCart?.reduce(
    (total, item) => total + item.subtotal,
    0
  );

  return sumTotalCart;
};
