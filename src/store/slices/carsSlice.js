import { createSlice, nanoid } from '@reduxjs/toolkit';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    searchTerm: '',
    data: []
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    // Assume the action is an object with the name and cost
    // action.payload === { name: 'ab', cost: $140}
    // id is generated in this reducer
    addCar(state, action) { 
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    // Assume the action is the id of the car we want to remove
    // uses filter function to remove car with correct ID
    removeCar(state, action) {
      const updated = state.data.filter((car) => {
        return car.id !== action.payload
      });
      state.data = updated;
    },
  },
});

export const {changeSearchTerm, addCar, removeCar} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;