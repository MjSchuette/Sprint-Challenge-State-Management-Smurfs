import React, { useState } from 'react';
import { Button, Input, Form } from 'reactstrap';

const Card = () => {
const [data, setData] = useState({
    name: '',
    age: '',
    height: '',
    id: Date.now()
})
    const handleChanges = e => {
        e.preventDefault()
        setData({ ...data, [e.target.name]: e.target.value })
    }
    return (
        <Form className='Card'>
            <Input type='text' name='name' placeholder='Smurf Name' onChange={handleChanges} />
            <Input type='text' name='age' placeholder='Smurf Age' onChange={handleChanges} />
            <Input type ='text' name='height' placeholder='Smurf Height' onChange={handleChanges} />
            <Button>Add Smurf</Button>
        </Form>
    );
};

export default Card;