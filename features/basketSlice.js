import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    //Helper methods that modify basket
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.payload.id}) as its not in basket `
        );
      }

      state.items = newBasket;
    },
  },
});

//pull items out of basket

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;
//pull items out of basket
export const selectBasketItems = (state) => state.basket.items;
//Helper func to filter out data for partical dish id
export const selectBasketItemsWithId = (state, id) =>
  state.basket.items.filter((item) => item.id === id);
//get basket total
export const selectBasketTotal = (state) =>
  state.basket.items.reduce((total, item) => (total += item.price), 0);
export default basketSlice.reducer;
