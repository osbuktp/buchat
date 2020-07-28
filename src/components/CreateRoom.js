import React from 'react'
import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

export default function CreateRoom() {
    return <Card>
        <Card.Body>
            <Card.Title>
                Create Room
        </Card.Title>
            <Card.Text>
                <InputGroup>
                    <FormControl placeholder="Room id" />
                    <InputGroup.Append>
                        <Button variant="outline-secondary">Create</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Card.Text>
        </Card.Body>
    </Card>
}