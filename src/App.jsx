// NPM packages
import { useState, useEffect } from "react";

// Project files
import { useTasks } from "./state/TasksContext"
import ModalForm from "./components/ModalForm";
import ShoppingScreen from "./screens/ShoppingScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import Logo from "./assets/logo.png";

export default function App() {

  const { tasks, setTasks } = useTasks(); 

  // Local state
  // const [list, setList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Properties
  const storageKey = "todo-test";


//Methods
function openModal() {
  setShowModal(true);
}

useEffect(() => loadData(storageKey, setTasks), []);
useEffect(() => saveData(storageKey, tasks), [tasks]);

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
      <header className="header">
        <img src={Logo} alt="The words EIKA behind a circle background" />
      </header>
      {tasks.length === 0 && <WelcomeScreen openModal={openModal}/>}
      {tasks.length >0 && <ShoppingScreen openModal={openModal}/>}
      <ModalForm
        modalState={[showModal, setShowModal]}
      />
    </div>
  );
}
