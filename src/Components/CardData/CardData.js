import React from 'react'
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function CardData({ item }) {
    return (
        <div >
            <div key={item.id}>
                <Card className='bg-white text-dark m-2 mb-4'>
                    <Card.Body>
                        <Card.Title >{item.name}</Card.Title>
                        <NavLink>
                            <Card.Img variant="top" src={item.image} className='img-fluid' />
                        </NavLink>
                        <NavLink className='mt-1 text-decoration-none '>
                            <div className=''>
                                <span className='text-left see_More '>See more</span>
                            </div>
                        </NavLink>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
export default CardData