// NPM packages
import { useState, useEffect } from "react";

// Project files
import ModalForm from "./components/ModalForm";
import ShoppingScreen from "./screens/ShoppingScreen";
import WelcomeScreen from "./screens/WelcomeScreen";

export default function App() {
  // Local state
  const [list, setList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Properties
  const storageKey = "todo-test";


//Methods
function openModal() {
  setShowModal(true);
}

useEffect(() => loadData(storageKey, setList), []);
useEffect(() => saveData(storageKey, list), [list]);

function loadData(key, setter) {
  const rawData = localStorage.getItem(key);
  const parsedData = JSON.parse(rawData) || []; 

  setter(parsedData);
}

function saveData(key, getter) {
  const data = JSON.stringify(getter);

  localStorage.setItem(key, data);
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
