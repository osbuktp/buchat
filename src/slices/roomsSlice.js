import {createSlice} from '@reduxjs/toolkit'

const roomsSlice = createSlice({
    name: "room",
    initialState: {
        rooms: {}
    },
    reducers: {
        addRoom: (state, action) => {
            const {room} = action.payload
            state.rooms[room.id] = room
            return state
        },
        addMessage: (state, action) => {
            const {roomId, message} = action.payload
            state.rooms[roomId].messages.push(message)
            return state
        }
    }
})

export const {addRoom, addMessage} = roomsSlice

export default roomsSlice.reducer