import React from 'react'
import styles from './Chat.module.scss'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {changeRoom} from '../slices/currentRoomSlice'

import io from 'socket.io-client'

export default function Chat() {
    useEffect(() => {
        const socket = io('localhost:3000')
        socket.on('message', (message) => console.log("message from socketio", message))
    }, [])    

    const dispatch = useDispatch()
    const userId = useSelector(state => state.user.user.id)
    useEffect(() => {
        dispatch(changeRoom(userId))
    }, [dispatch, userId])
    const roomId = useSelector(state => state.currentRoom)

    return <div className={styles.chat}>
        <div className="messages">
            {roomId}
        </div>
        <div className={styles.inputbox}>
            <Form>
                <InputGroup>
                <Form.Control as="textarea" style={{resize: "none"}} rows="2" />
                <InputGroup.Append>
                    <Button variant="outline-secondary">Send</Button>
                </InputGroup.Append>
                </InputGroup>
            </Form>
        </div>
    </div>
}