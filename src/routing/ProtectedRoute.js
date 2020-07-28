import React from 'react'
import {useSelector} from 'react-redux'
import {Route, useHistory} from 'react-router-dom'
// import useAuth from '../hooks/useAuth'

export default function ProtectedRoute(props) {
    // useAuth()
    const logged = useSelector(store => store.user.logged)
    const history = useHistory()
    if (logged) return <Route {...props} />
    else {
        history.push('/login')
        return null
    }
}