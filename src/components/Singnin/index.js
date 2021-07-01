import React from 'react'
import { Form, Button, Card } from 'react-bootstrap';
import { auth } from '../../firebase';

auth.createUserWithEmailAndPassword(process.env.REACT_APP_EMAIL,process.env.REACT_APP_PASSWORD);

export default function index() {
    return (
        <>
            <Card></Card>
        </>
    )
}
