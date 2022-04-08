// NPM packages
import { useState } from "react";

// Project files
import InputField from "./InputField";
import form from "../data/form.json";
import validateName from "../scripts/validation/validateName"
import validatePrice from "../scripts/validation/validatePrice"
import { useTasks } from "../state/TasksContext"

export default function ModalForm({ modalState }) {

  //Safeguard
  if (modalState === undefined) throw new Error("The modalState prop is missing");

  const {addItem} = useTasks();
  const [showModal, setShowModal] = modalState;

  // Local state
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Methods
  function onSubmit(event) {
    event.preventDefault();
    addItem(name,price);
    resetForm();
  }

  function resetForm() {
    setName("");
    setPrice("");
    setShowModal(null); //or false
  }

  //Safeguard
  if (!showModal) return null;

  return (
    <div className="modal">
      <div className="background">
        <form className="form" onSubmit={(event) => onSubmit(event)} >
          <h2>Create new item</h2>
          <InputField setup={form.name} state={[name, setName]} validation={validateName}/>
          <InputField setup={form.price} state={[price, setPrice]} validation={validatePrice}/>
          <button className="button-primary">Submit</button>
          <button className="button-secondary" onClick={resetForm}>Cancel</button>
        </form>
      </div>
    </div>
  );
}
