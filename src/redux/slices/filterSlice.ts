import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
    selectedCategory: number;
    showPopUp: boolean;
    selectedSorting: number;
    categories: string[];
    sortingTypes: string[];
}

const initialState: FilterState = {
    selectedCategory: 0,
    showPopUp: false,
    selectedSorting: 0,
    categories: [
        'Все',
        'Мясные',
        'Вегетарианские',
        'Гриль',
        'Острые',
        'Закрытые',
    ],
    sortingTypes: ['популярности', 'цене', 'алфавиту'],
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSelectedCategory: (state, action: PayloadAction<number>) => {
            state.selectedCategory = action.payload;
        },
        setShowPopUp: (state, action: PayloadAction<boolean>) => {
            state.showPopUp = action.payload;
        },
        setSelectedSorting: (state, action: PayloadAction<number>) => {
            state.selectedSorting = action.payload;
        },
    },
});

export const { setSelectedCategory, setShowPopUp, setSelectedSorting } =
    filterSlice.actions;

export default filterSlice.reducer;
