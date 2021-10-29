import { createSlice } from '@reduxjs/toolkit'

export const foodSlice = createSlice({
    name: 'food',
    initialState: {
        food_array: [],
        active_food: {},
        drink: true,
        food: true,
        price_minimal: '',
        price_maximal: '',
        proteins_minimal: '',
        proteins_maximal: '',
        fats_minimal: '',
        fats_maximal: '',
        carbohydrates_minimal: '',
        carbohydrates_maximal: '',
        search: '',
    },
    reducers: {
        add_food(state, action) {
            state.food_array = action.payload
        },
        change_drink(state) {
            state.drink = state.drink == true ? false : true
        },
        change_food(state) {
            state.food = state.food == true ? false : true
        },
        change_text(state, action) {
            state.search = action.payload
        },
        change_price_minimal(state, action) {
            state.price_minimal = action.payload
        },
        change_price_maximal(state, action) {
            state.price_maximal = action.payload
        },
        change_proteins_minimal(state, action) {
            state.proteins_minimal = action.payload
        },
        change_proteins_maximal(state, action) {
            state.proteins_maximal = action.payload
        },
        change_fats_minimal(state, action) {
            state.fats_minimal = action.payload
        },
        change_fats_maximal(state, action) {
            state.fats_maximal = action.payload
        },
        change_carbohydrates_minimal(state, action) {
            state.carbohydrates_minimal = action.payload
        },
        change_carbohydrates_maximal(state, action) {
            state.carbohydrates_maximal = action.payload
        },
    }
})

export default foodSlice.reducer
export const { add_food, 
                change_drink, 
                change_food, 
                change_text, 
                change_price_minimal, 
                change_price_maximal, 
                change_proteins_minimal, 
                change_proteins_maximal, 
                change_fats_minimal, 
                change_fats_maximal, 
                change_carbohydrates_minimal,
                change_carbohydrates_maximal } = foodSlice.actions