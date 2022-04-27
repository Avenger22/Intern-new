import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IDashboard from "../../../interfaces/IDashboard"

const initialState: IDashboard = {
    products: []
}

const dashboardStore = createSlice({

  name: 'dashboard',

  initialState,
  
  reducers: {

    setProducts(state, action: PayloadAction<[]>) {
        state.products = action.payload
    },

    invalidateProducts(state) {
      state.products = []
    }

  }
  
});

export default dashboardStore;

export const { setProducts, invalidateProducts } = dashboardStore.actions;