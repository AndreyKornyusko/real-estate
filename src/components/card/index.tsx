import React from 'react'
import {Card} from '../../interfaces/data.interaface'
interface ICardItem {
  cardItem:Card
}
 const CardItem =({cardItem}:ICardItem) =>{
  return (
    <div>{cardItem?.address?.streetName}</div>
  )
}

export default CardItem