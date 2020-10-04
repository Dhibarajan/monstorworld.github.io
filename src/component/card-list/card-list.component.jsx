import React from 'react'
import './card-list.styling.css'
import { Card } from '../card/card.component'

export const CardList = (props) => (
    <div className='card-list'>
        {props.monstor.map(monstor => (
            <Card key={monstor.id} monstor={monstor}></Card>
        ))}
    </div>
)

