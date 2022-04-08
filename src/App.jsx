// NPM packages
import { useState } from "react";

// Project files
import ModalForm from "./components/ModalForm";
import ShoppingScreen from "./screens/ShoppingScreen";
import WelcomeScreen from "./screens/WelcomeScreen";

export default function App() {
  // Local state
  const [list, setList] = useState([]);
  const [showModal, setShowModal] = useState(false);

//Methods
function openModal() {
  setShowModal(true);
}

  return (
    <div className="App">
      {list.length === 0 && <WelcomeScreen openModal={openModal}/>}
      {list.length >0 && <ShoppingScreen listState={[list,setList]} openModal={openModal}/>}
      <ModalForm
        listState={[list, setList]}
        modalState={[showModal, setShowModal]}
      />
    </div>
  );
}
