import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import{ loadSmurf } from '../actions/actions'
import { Button, Card, Row } from 'reactstrap';
import "./App.css";

const CallCard = () => {
    const items = useSelector(state => state.smurfs);
    const dispatch = useDispatch();
    return (
        <>
        <div>
            <Button onClick={() => dispatch(loadSmurf())}>Load All Smurfs</Button>
        </div>
        <div>
            <Row>
                {items.map(p => 
                    <Card className='card' id={p.id}>
                        <h2>{p.name}</h2>
                        <h4>{p.age} years old</h4>
                        <h4>{p.height}</h4>
                    </Card>
                )}
            </Row>
        </div>
        </>
    )
};

export default CallCard;