import React, {useState, useEffect} from "react";
import Card from './Card';
import axios from 'axios';


const Deck = () => {

  const API_URL = "https://deckofcardsapi.com/api/deck"
  
  const [cards, setCards] = useState([])
  const [isShuffled, setIsShuffled] = useState(false)
  const [deck, setDeck] = useState(null)
  
  useEffect(function getDeck() {
    async function getData() {
      const res = await axios.get(`${API_URL}/new/shuffle`);
      setDeck(res.data.deck_id)
    }
    getData()
  }, [])
  
  const 

  return (
    <div>
      <Card />
      <button onClick={}>Draw a 🃏</button>
    </div>
  )

}

export default Deck;