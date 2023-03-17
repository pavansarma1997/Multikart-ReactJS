import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuid } from "uuid";

const productsSlice = createSlice({
    name: 'Products',
    initialState: {
        value: [],
        status: "pending",
        error: null
    },
    reducers: {},
    extraReducers: builder => builder.addCase(fetchproductsdata.pending, (state, action) => {
        state.status = "pending";
    })
        .addCase(fetchproductsdata.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        })
        .addCase(fetchproductsdata.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.value = action.payload;
        })
});

export const fetchproductsdata = createAsyncThunk("Products/fetch", async () => {
    try {
        const { data } = await axios.get("https://res.cloudinary.com/dwdy4lewd/raw/upload/v1668789945/React%20Class/O.%20Sai%20Kiran/products_hktdc7.json");
        return data.map(e => ({ ...e, id: uuid() }));

    } catch (error) {
        return error.message;
    }
})

export default productsSlice;