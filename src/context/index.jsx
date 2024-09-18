// create the contex
//provide the state to the contex
//wrap context in root component
//consume the context using useContext

import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShoppingCartContext = createContext(null);

function ShoppingCartPrivider({ children }) {
  const [loading, setLoading] = useState(true);
  const [listOfProduct, setListOfProduct] = useState([]);
  const [productDetails, setProductDetails] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  async function fetchListOfProduct() {
    const apiResponse = await fetch("https://dummyjson.com/products");
    const result = await apiResponse.json();
    // console.log(result);

    if (result && result?.products) {
      setListOfProduct(result?.products);
      setLoading(false);
    }
  }

  function handleAddToCart(getProductDetials) {
    console.log(getProductDetials);

    let copyExistingCartItem = [...cartItems];
    const findIndexOfCurrentItem = copyExistingCartItem.findIndex(
      (cartItem) => cartItem.id === getProductDetials.id
    );

    console.log(findIndexOfCurrentItem);

    if (findIndexOfCurrentItem === -1) {
      copyExistingCartItem.push({
        ...getProductDetials,
        quantity: 1,
        totalprice: getProductDetials?.price,
      });
    } else {
      console.log("its coming here ");
      copyExistingCartItem[findIndexOfCurrentItem] = {
        ...copyExistingCartItem[findIndexOfCurrentItem],
        quantity: copyExistingCartItem[findIndexOfCurrentItem].quantity + 1,
        totalprice:
          (copyExistingCartItem[findIndexOfCurrentItem].quantity + 1) *
          copyExistingCartItem[findIndexOfCurrentItem].price,
      };
    }

    console.log(copyExistingCartItem, "copyExistingCartItem");
    setCartItems(copyExistingCartItem);
    localStorage.setItem("cartItems", JSON.stringify(copyExistingCartItem));
    navigate("/cart");
  }

  function handleRemoveFromCart(getProductDetials, isFullyRemoveFromCart) {
    let copyExistingCartItem = [...cartItems];
    const findIndexOfCurrentItem = copyExistingCartItem.findIndex(
      (item) => item.id === getProductDetials.id
    );

    if (isFullyRemoveFromCart) {
      copyExistingCartItem.splice(findIndexOfCurrentItem, 1);
    } else {
      copyExistingCartItem[findIndexOfCurrentItem] = {
        ...copyExistingCartItem[findIndexOfCurrentItem],
        quantity: copyExistingCartItem[findIndexOfCurrentItem].quantity - 1,
        totalprice:
          (copyExistingCartItem[findIndexOfCurrentItem].quantity - 1) *
          copyExistingCartItem[findIndexOfCurrentItem].price,
      };
    }

    localStorage.setItem("cartItems", JSON.stringify(copyExistingCartItem));
    setCartItems(copyExistingCartItem);
  }

  useEffect(() => {
    fetchListOfProduct();
    setCartItems(JSON.parse(localStorage.getItem("cartItems") || []));
  }, []);

  // console.log(listOfProduct);
  console.log(cartItems);

  return (
    <ShoppingCartContext.Provider
      value={{
        listOfProduct,
        loading,
        setLoading,
        productDetails,
        setProductDetails,
        handleAddToCart,
        cartItems,
        handleRemoveFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
export default ShoppingCartPrivider;
