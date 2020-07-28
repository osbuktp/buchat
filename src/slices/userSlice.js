import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {login, logout, register} from '../api/userApi'

const loginThunk = createAsyncThunk(
    'user/login',
    async (user, thunkApi) => {
        try {
            const {email, password} = user
            const {data} = await login(email, password)
            return data
        } catch (e) {
            thunkApi.rejectWithValue("Login failed")
        }
    }
)

const registerThunk = createAsyncThunk(
    'user/register',
    async (user, thunkApi) => {
        try {
            const {username, email, password} = user
            const {data} = await register(username, email, password)
            return data
        } catch(e) {
            thunkApi.rejectWithValue("Register failed")
        }
    }
)

const logoutThunk = createAsyncThunk(
    'user/logout',
    async (thunkApi) => {
        try {
            return await logout()
        } catch(e) {
            thunkApi.rejectWithValue("Logout failed")
        }
    }
)

const pendingUserData = (state) => {
    state.pending = true
}
const retrievedUserData = (state, action) => {
    state.error = false
    state.logged = true
    state.user = action.payload.user
    state.pending = false
}
const actionFailed = (state, action) => {
    state.error = true
    state.errorMessage = action.payload
}

const flushUser = (state) => {
    const user = {
        id: null,
        username: null,
        password: null
    }
    state.user = user
}

const userSlice = createSlice({
    name: "user",
    initialState: {
        pending: false,
        error: false,
        errorMessage: null,
        logged: false,
        user: {
            id: null,
            username: null,
            email: null
        }
    },
    extraReducers: {
        [loginThunk.pending]: pendingUserData,
        [loginThunk.fulfilled]: retrievedUserData,
        [loginThunk.rejected]: actionFailed,
        [registerThunk.pending]: pendingUserData,
        [registerThunk.fullfilled]: retrievedUserData,
        [registerThunk.rejected]: actionFailed,
        [logoutThunk.pending]: pendingUserData,
        [logoutThunk.fulfilled]: flushUser,
        [logoutThunk.rejected]: actionFailed
    }
})

export {loginThunk, logoutThunk, registerThunk}

export default userSlice.reducer;