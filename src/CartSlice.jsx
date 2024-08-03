import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const {name, image, cost} = action.payload;
      const ite_existente = state.items.find(item => item.name === name);

      if (ite_existente){
        ite_existente.quantity += 1;
      }else {
        state.items.push({name, image, cost, quantity: 1});
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload );
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
      /*
      To create this function, start by extracting the item's name and amount from the action.payload. 
      Then, look for the item in the state.items array that matches the extracted name. 
      If the item is found, update its quantity to the new amount provided in the payload. 
      This ensures the item’s quantity is correctly updated based on the action.
      */
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

/*
Slice Creation:
You call createSlice with an object containing configuration options for your slice.
The configuration options include:
name: A string value representing the name of your slice. It's used internally by Redux Toolkit for action type prefixing and other purposes.

initialState: An object representing the initial state of your slice.

reducers: An object containing reducer functions. Each key-value pair represents a single reducer, where the key is the name of the action and the value is the reducer function.

¿Qué representan los parámetros de las funciones "addItem, removeItem, updateQuantity"?
state: This represents the current state of the Redux store. It typically includes the data relevant to the application.
action: This is an object that describes the action that occurred. Redux actions are plain JavaScript objects that must have a type property indicating the type of action being performed. Additionally, they may contain additional data necessary to carry out the action. In this case, action.payload likely contains the identifier (id) of the item whose quantity needs to be increased.
*/
