import { useState } from 'react';

import TaskList from "../components/TaskList";
import Sorter from "../components/Sorter";
import { useTasks } from "../state/TasksContext"

export default function ShoppingScreen({ openModal }) {
    const { tasks } = useTasks();

    //Local state
    const [showCompleted, setShowCompleted] = useState(false);

    // Properties
    const completedItems = tasks.filter((item) => item.completed === true);
    const pendingItems = tasks.filter((item) => item.completed === false);
    const toggleLabel = showCompleted ? "Hide" : "View";


  return (
    <div>
        <h1>Shopping List</h1>
        <Sorter />
        <TaskList list={pendingItems} />
      <button onClick={openModal}>Add item</button>
      <button onClick={() => setShowCompleted(!showCompleted)}>
        {toggleLabel} completed items
      </button>
      {showCompleted && <TaskList list={completedItems} />}
    </div>
  )
}
