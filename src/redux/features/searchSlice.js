import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
const initialState = {
    query:'',
    results:[],
    loading:false,
    error:null
}
const searchSlice = createSlice({
    name:"search",
initialState,
reducers:{
    setQuery(state,action){
        state.query = action.payload
    },
    setResult(state,action){
        state.results=action.payload
    },
    setLoading(state,action){
        state.loading = true
        state.error = null
    },
    setError(state,action){
        state.error = action.payload
        state.loading = false
    },
    clearResults(state){
        state.results=[]
    }
}
})
export const {setQuery,setResult,setLoading,setError,clearResults} = searchSlice.actions
export default searchSlice.reducer
