import Image from "../assets/urban-shopping.png";

export default function WelcomeScreen({ openModal }) {
  //Safeguard
  if (openModal === undefined) throw new Error("The openModal prop is missing");

  return (
    <div>
      <img
        src={Image}
        alt="A woman with a shopping bag"
      />
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
