import { configureStore } from '@reduxjs/toolkit'
import HotelSlice from '../features/HotelSlice'

const store = configureStore({
    reducer: {

        HotelSlice: HotelSlice
    },
    devTools: true
})
export { store }