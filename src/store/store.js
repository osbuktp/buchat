import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "redux";

import userReducer from '../slices/userSlice';
import currentRoomReducer from '../slices/currentRoomSlice'
import roomsReducer from '../slices/roomsSlice'

const rootReducer = combineReducers({
    user: userReducer,
    currentRoom: currentRoomReducer,
    rooms: roomsReducer
})

export default configureStore({
    reducer: rootReducer
})