import { useState } from 'react';

import TaskList from "../components/TaskList";
import Sorter from "../components/Sorter"

export default function ShoppingScreen({ listState, openModal }) {
    const [list, setList] = listState;

    //Local state
    const [showCompleted, setShowCompleted] = useState(false);

    // Properties
    const completedItems = list.filter((item) => item.completed === true);
    const pendingItems = list.filter((item) => item.completed === false);
    const toggleLabel = showCompleted ? "Hide" : "View";

    // Methods
    function editList(editedItem) {
      const clonedList = [...list];
      const index = clonedList.findIndex((item) => item.id === editedItem.id);
  
      clonedList[index] = editedItem;
      setList(clonedList);
    }

  return (
    <div>
        <h1>Shopping List</h1>
        <Sorter listState={[list,setList]} />
        <TaskList list={pendingItems} editList={editList} />
      <button onClick={openModal}>Add item</button>
      <button onClick={() => setShowCompleted(!showCompleted)}>
        {toggleLabel} completed items
      </button>
      {showCompleted && <TaskList list={completedItems} editList={editList} />}
    </div>
  )
}
