import { createSlice} from '@reduxjs/toolkit';
import { addCar } from './carsSlice';
//getting the addCar action for the extraReducers 

const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    cost: 0
  },
  reducers: {
    changeName(state, action) { //assume action payload has the name
      state.name = action.payload;
    },
    changeCost(state, action) { //assume action payload has the cost
      state.cost = action.payload;
    }
  },
  extraReducers(builder) {
    builder.addCase(addCar, (state, action) => {
      state.name = '';
      state.cost = 0;
    })
    //aka cars/addCarr
  }
});

export const {changeName, changeCost} = formSlice.actions;
export const formReducer = formSlice.reducer;
//combined reducer and the individual actions