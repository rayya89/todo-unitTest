// NPM packages
import { useState } from "react";

// Project files
import InputField from "./InputField";
import form from "../data/form.json";
import validateName from "../scripts/validateName"
import validatePrice from "../scripts/validatePrice"

export default function ModalForm({ listState, modalState }) {
  const [list, setList] = listState;
  const [showModal, setShowModal] = modalState;

  // Local state
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Methods
  function onSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: list.length,
      name: name,
      price: price,
      completed: false,
      imageURL: "",
    };

    setList([...list, newItem]);
    resetForm();
  }

  function resetForm() {
    setName("");
    setPrice("");
    setShowModal(null); //or false
  }

  // Safeguard
  if (!showModal) return null;

  return (
    <form onSubmit={(event) => onSubmit(event)} >
      <h2>Create new item</h2>
      <InputField setup={form.name} state={[name, setName]} validation={validateName}/>
      <InputField setup={form.price} state={[price, setPrice]} validation={validatePrice}/>
      <button>Submit</button>
      <button onClick={resetForm}>Cancel</button>
    </form>
  );
}
