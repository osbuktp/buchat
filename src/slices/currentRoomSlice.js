import {createSlice} from "@reduxjs/toolkit"

const currentRoomSlice = createSlice({
    name: "currentRoom",
    initialState: null,
    reducers: {
        changeRoom: (state, action) => state = action.payload
    }
})

export const {changeRoom} = currentRoomSlice.actions

export default currentRoomSlice.reducer