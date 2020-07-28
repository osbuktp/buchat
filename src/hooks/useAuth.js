import {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'

export default function useAuth() {
    const logged = useSelector(state => state.user.logged)
    const history = useHistory()
    useEffect(() => {
        if (!logged) history.push("/login")
    }, [logged, history])
}