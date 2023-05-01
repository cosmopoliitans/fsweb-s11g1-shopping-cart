import React, { useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data";
import { ProductContext, CartContext } from "./components/context";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState(initialStateOku("cart"));

  function localStorageYaz(cart) {
    return localStorage.setItem("cart", JSON.stringify(cart));
  }
  function localStorageOku(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  function initialStateOku(key) {
    const initialCart = localStorageOku(key);
    if (initialCart) {
      return initialCart;
    } else {
      return [];
    }
  }
  const addItem = (item) => {
    // verilen itemi sepete ekleyin
    const newCart = [...cart, item];
    setCart(newCart);
    localStorageYaz(newCart);
  };

  const deleteItem = (item) => {
    const deleteItem = [...cart.filter((i) => i.id !== item.id)];
    setCart(deleteItem);
    localStorageYaz(deleteItem);
  };
  return (
    <ProductContext.Provider value={{ products, addItem }}>
      <CartContext.Provider value={{ cart, deleteItem }}>
        <div className="App">
          <Navigation />

          {/* Routelar */}
          <main className="content">
            <Route exact path="/">
              <Products />
            </Route>

            <Route path="/cart">
              <ShoppingCart />
            </Route>
          </main>
        </div>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;
