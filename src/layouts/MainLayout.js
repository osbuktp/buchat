import React from 'react'
import styles from './MainLayout.module.scss'

import Container from 'react-bootstrap/Container'
import RoomList from '../components/RoomList'
import RoomInfo from '../components/RoomInfo'

import RoomSearch from '../components/RoomSearch'
import CreateRoom from '../components/CreateRoom'

export default function MainLayout({ children }) {
    return <Container>
        <div className={styles.layout}>
            <div className={styles.menu}>
                <h3>Buchat</h3>
            </div>
            <div className={styles.roomlist}>
                <RoomSearch />
                <CreateRoom />
                <RoomList />
            </div>
            <div className={styles.room}>
                {children}
            </div>
            <div className={styles.roominfo}>
                <RoomInfo />
            </div>
        </div>
    </Container>
}