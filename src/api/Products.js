import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
export const fetchData = createAsyncThunk("Product",async()=>
{
    const result=await fetch("https://fakestoreapi.com/products")
    const res=result.json();
    return res;
})
const ProductList=createSlice({
    name:"Product",
    initialState:{},
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchData.pending,(state,action)=>{
            state.loading=true;
        })
        .addCase(fetchData.fulfilled,(state,action)=>{
            state.data=action.payload;
            state.loading=true;

        })
        .addCase(fetchData.rejected,(state,action)=>{
            state.status="rejected due to some internal error"
            state.loading=true;
        })
    }
})

export default ProductList.reducer;