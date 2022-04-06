// NPM packages
import { useState } from "react";

// Project files
import ModalForm from "./components/ModalForm";

export default function App() {
  // Local state
  const [list, setList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Component
  const Items = list.map((item) => (
    <li key={item.id}>
      {item.name}, {item.price}:-
    </li>
  ));

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <ul>{Items}</ul>
      <button onClick={() => setShowModal(true)}>Add item</button>
      <ModalForm
        listState={[list, setList]}
        modalState={[showModal, setShowModal]}
      />
    </div>
  );
}
