import axios from './axios'

async function login(email, password) {
    return await axios.post('/auth/login', {
        email,
        password
    })
}

async function logout() {
    return await axios.post('/auth/logout')
}

async function register(username, email, password) {
    return await axios.post('/auth/register', {
        username,
        email,
        password
    })
}

export {
    login,
    logout,
    register
}