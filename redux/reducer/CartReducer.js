"use client";

/* ---------------------------------------------
   Safe localStorage reader
--------------------------------------------- */
const getLocalStorage = () => {
  if (typeof window === "undefined") return [];

  try {
    const cart = localStorage.getItem("hiStudy");
    const parsed = cart ? JSON.parse(cart) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
};

/* ---------------------------------------------
   Initial State
--------------------------------------------- */
const init = {
  cart: getLocalStorage(), // ALWAYS array
  total_items: 0,
  total_amount: 0,
  shipping_fee: 80,
  loading: false,
  error: false,
  msg: "",
};

/* ---------------------------------------------
   Cart Reducer
--------------------------------------------- */
export const CartReducer = (state = init, action) => {
  switch (action.type) {
    case "CART_REQ":
      return {
        ...state,
        loading: true,
      };

    case "CART_REQ_OUT":
      return {
        ...state,
        loading: false,
      };

    /* -----------------------------------------
       ADD TO CART
    ----------------------------------------- */
    case "ADD_TO_CART": {
      const { id, amount = 1, product } = action.payload || {};

      if (!id || !product) return state;

      const cart = Array.isArray(state.cart) ? state.cart : [];

      const existingItem = cart.find((i) => i.id === id);

      if (existingItem) {
        const updatedCart = cart.map((item) =>
          item.id === id
            ? {
                ...item,
                amount: Math.min(
                  item.amount + amount,
                  item.max || item.amount + amount
                ),
              }
            : item
        );

        return {
          ...state,
          cart: updatedCart,
          msg: "Already added!",
        };
      }

      const newItem = {
        id,
        price: Number(product.price) || 0,
        product,
        amount,
        max: product.max || 100,
      };

      return {
        ...state,
        cart: [...cart, newItem],
        msg: "Item added successfully",
      };
    }

    /* -----------------------------------------
       TOGGLE CART ITEM AMOUNT
    ----------------------------------------- */
    case "TOGGLE_CART_AMOUNT": {
      const { id, value } = action.payload || {};
      const cart = Array.isArray(state.cart) ? state.cart : [];

      const updatedCart = cart.map((item) => {
        if (item.id !== id) return item;

        if (value === "inc") {
          return {
            ...item,
            amount: Math.min(item.amount + 1, item.max || item.amount + 1),
          };
        }

        if (value === "dec") {
          return {
            ...item,
            amount: Math.max(item.amount - 1, 1),
          };
        }

        return item;
      });

      return {
        ...state,
        cart: updatedCart,
      };
    }

    /* -----------------------------------------
       COUNT TOTALS (CRASH-PROOF)
    ----------------------------------------- */
    case "COUNT_CART_TOTALS": {
      const cart = Array.isArray(state.cart) ? state.cart : [];

      const totals = cart.reduce(
        (acc, item) => {
          const amount = Number(item.amount) || 0;
          const price = Number(item.price) || 0;

          acc.total_items += amount;
          acc.total_amount += price * amount;

          return acc;
        },
        {
          total_items: 0,
          total_amount: 0,
        }
      );

      return {
        ...state,
        ...totals,
      };
    }

    /* -----------------------------------------
       DELETE SINGLE ITEM
    ----------------------------------------- */
    case "DELETE_CART_ITEM": {
      const cart = Array.isArray(state.cart) ? state.cart : [];
      return {
        ...state,
        cart: cart.filter((item) => item.id !== action.payload),
      };
    }

    /* -----------------------------------------
       CLEAR CART
    ----------------------------------------- */
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
        total_items: 0,
        total_amount: 0,
      };

    /* -----------------------------------------
       ERROR HANDLING
    ----------------------------------------- */
    case "SET_CART_ERROR":
      return {
        ...state,
        error: true,
      };

    case "CLEAR_CART_ERROR":
      return {
        ...state,
        error: false,
        msg: "",
      };

    default:
      return state;
  }
};
