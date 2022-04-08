import { useState } from 'react';

import TaskList from "../components/TaskList";
import Sorter from "../components/Sorter";
import { useTasks } from "../state/TasksContext"

export default function ShoppingScreen({ openModal }) {

    //Safeguard
  if (openModal === undefined) throw new Error("The openModal prop is missing");

    const { tasks } = useTasks();

    //Local state
    const [showCompleted, setShowCompleted] = useState(false);

    // Properties
    const completedItems = tasks.filter((item) => item.completed === true);
    const pendingItems = tasks.filter((item) => item.completed === false);
    const toggleLabel = showCompleted ? "Hide" : "View";


  return (
    <div className="shopping-screen">
        <h1>Shopping List</h1>
        <div className="sorter"><Sorter /></div>
        <TaskList list={pendingItems} />
      <button className="button-primary" onClick={openModal}>Add item</button>
      <button className="button-secondary" onClick={() => setShowCompleted(!showCompleted)}>
        {toggleLabel} completed items
      </button>
      {showCompleted && <TaskList list={completedItems} />}
    </div>
  )
}
