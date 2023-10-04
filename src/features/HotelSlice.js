import { createSlice } from '@reduxjs/toolkit'

import { hotelData } from '../data/HotelData'

const initialState = {
    hotelData: {}
}

const hoteldataSlice = createSlice({
    name: 'hotelDetails',
    initialState,
    reducers: {
        SetHotelDetails: (state, action) => {
            state.hotelData = hotelData.filter(hotel => hotel.id === parseInt(action.payload))
        }
    }
})

export const { SetHotelDetails } = hoteldataSlice.actions
export default hoteldataSlice.reducer;