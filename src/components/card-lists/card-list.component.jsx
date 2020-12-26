import React from 'react'
import './card-list.styles.css';
import Card from '../card/card.component.jsx'

function CardList(props) {
    return (
        <div className='card-list'>
            {props.monsters.map(x => <Card key={x.id} monster={x}></Card>)}
        </div>
    )
}

export default CardList

