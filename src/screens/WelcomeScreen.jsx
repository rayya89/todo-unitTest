import React from 'react'

export default function WelcomeScreen({ openModal }) {
  return (
    <div>
    <h1>EIKA's shopping list</h1>
    <p>
      Welcome to EIKA’s shopping list. Here you will be able to create a todo
      list for the furniture you want to buy.
      To get started press the Add new item button and add an item by typing its name and price.
    </p>
    <button onClick={openModal}>Add item</button>
    </div>
  )
}
