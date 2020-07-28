import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

export default function RoomList() {
    return <Card>
        <Card.Body>
            <Card.Title>Room list</Card.Title>
                <ListGroup>
                    <ListGroup.Item as="li" active>
                        Default room
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                        Another room
                    </ListGroup.Item>
                </ListGroup>
        </Card.Body>
    </Card>
}