import React, { useEffect,useRef } from 'react'
import './TittleCards.css'
import cards_data from '../../assets/cards/Cards_data'

const TittleCards = ({tittle,category}) => {
  const cardsRef = useRef();

const handleWheel = (event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaX;
}

useEffect(()=>{
  cardsRef.current.addEventListener('wheel',handleWheel);
},[])
  return (
    <div className='tittlecards'>
      <h2>{tittle?tittle:"Popular on NetFlix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card,idx)=>{
          return <div className="card" key={idx}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </div>
        })}
      </div>
    </div>

  )
}

export default TittleCards