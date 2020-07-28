import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const userAPI = {
    login: (user) => ({
        data: {
            state: true,
            user: {
                id: 0,
                name: 'Buktp'
            }
        }
    })
}

const login = createAsyncThunk(
    'user/login',
    async (user, thunkApi) => {
        const response = await userAPI.login(user)
        if (response.data === false) thunkApi.rejectWithValue("No user found")
        return response.data
    }
)

const userSlice = createSlice({
    name: "user",
    initialState: {
        pending: false,
        error: false,
        errorMessage: null,
        logged: false,
        user: {
            id: null,
            name: null
        }
    },
    extraReducers: {
        [login.pending]: (state, action) => {
            state.pending = true
        },
        [login.fulfilled]: (state, action) => {
            state.logged = action.payload.state
            state.user = action.payload.user
            state.error = false
            state.pending = false
        },
        [login.rejected]: (state, action) => {
            state.error = true
            state.errorMessage = action.payload
            state.pending = false
        }
    }

})

export {login}

export default userSlice.reducer;