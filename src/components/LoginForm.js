import React from 'react'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import {login} from '../slices/userSlice'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {useLayoutEffect} from 'react'

export default function LoginForm() {
    const logged = useSelector(state => state.user.logged)
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login())
    }

    useLayoutEffect(() => {
        if (logged) history.push('/')
    }, [logged, history])

    
    return <Container>
        <Row>
            <Col md={{ span: 4, offset: 4 }}>
                <Tabs defaultActiveKey="login">
                    <Tab eventKey="login" title="Login">
                        <Card>
                            <Card.Body>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId="email">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="username@email.com" />
                                    </Form.Group>
                                    <Form.Group controlId="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Login
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Tab>
                    <Tab eventKey="signup" title="SignUp">
                    <Card>
                            <Card.Body>
                                <Form>
                                    <Form.Group controlId="email">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="username@email.com" />
                                    </Form.Group>
                                    <Form.Group controlId="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group controlId="password">
                                        <Form.Control type="password" placeholder="Repeat password" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        SignUp
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Tab>
                </Tabs>
            </Col>
        </Row>
    </Container>
}