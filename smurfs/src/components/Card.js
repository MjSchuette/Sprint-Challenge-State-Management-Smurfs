import React, { useState } from 'react';
import { Button, Input, Form } from 'reactstrap';
import { addSmurf } from '../actions/actions';
import { useDispatch } from 'react-redux';
import "./App.css";

const Card = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        name: '',
        age: '',
        height: '',
        id: Date.now()
    });
        const handleChanges = e => {
            setData({ ...data, [e.target.name]: e.target.value })
        };

        return (
            <Form 
                onSubmit={e => {
                    e.preventDefault();
                    dispatch(addSmurf(data));
                    setData({ name: '', age: '', height: '', id:Date.now() });
                }}>
                    <Input type='text' name='name' placeholder='Smurf Name' onChange={handleChanges} /><br/><br/>
                    <Input type='text' name='age' placeholder='Smurf Age' onChange={handleChanges} /><br/><br/>
                    <Input type ='text' name='height' placeholder='Smurf Height' onChange={handleChanges} /><br/><br/>
                    <Button>Add Smurf</Button>
            </Form>
        );
};

export default Card;