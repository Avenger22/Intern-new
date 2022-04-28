import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IDashboard from "../../../interfaces/IDashboard"
import { TProduct } from '../../../interfaces/TProduct';

const initialState: IDashboard = {
    products: [],
    //@ts-ignore
    productItem: null
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
    },

    setProductItem(state, action: PayloadAction<TProduct>) {
      //@ts-ignore
      state.productItem = action.payload
    },

    invalidateProductItem(state) {
      //@ts-ignore
      state.productItem = null
    }

  }
  
});

export default dashboardStore;

export const { setProducts, invalidateProducts, setProductItem, invalidateProductItem } = dashboardStore.actions;