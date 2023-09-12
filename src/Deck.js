import React, {useState, useEffect} from "react";
import Card from './Card';
import axios from 'axios';
import './Deck.css'


const Deck = () => {

  const API_URL = "https://deckofcardsapi.com/api/deck"
  
  const [cards, setCards] = useState([])
  const [isShuffled, setIsShuffled] = useState(false)
  const [deck, setDeck] = useState(null)
  
  // Makes a request to API and gets a new deck
  useEffect(function getDeck() {
    async function getData() {
      const res = await axios.get(`${API_URL}/new/shuffle`);
      setDeck(res.data.deck_id)
    }
    getData()
  }, [])
  
  // Draws a card from the\ deck and updates state
  const drawCard = async() => {
    const res = await axios.get(`${API_URL}/${deck}/draw`);
    setCards(data => [
      ...data,
      {
        id: res.data.code,
        name: res.data.suit + " " + res.data.value,
        img: res.data.image
      }
    ])
  }

  // shuffles the deck and updates the state
  async function shuffling() {
    setIsShuffled(true)
    try {
      await axios.get(`${API_URL}/${deck}/shuffle/`)
      setCards([])
    }catch(err){
      alert(err)
    }finally {
      setIsShuffled(false)
    }
  }

  return (
    <div className="container" >
      {cards.map(card => <Card key={card.id} image={card.image} name={card.name} />)}
      <button onClick={() => drawCard()} disabled={isShuffled}>Draw</button>
      <button onClick={() => shuffling()} disabled={isShuffled}>Shuffle</button>
    </div>
  )

}

export default Deck;