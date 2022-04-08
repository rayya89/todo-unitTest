import TaskItem from "../components/TaskItem";
import Sorter from "../components/Sorter"

export default function ShoppingScreen({ listState, openModal }) {
    const [list, setList] = listState;

    // Methods
  function onCheck(id) {
    const clonedList = [...list];
    const index = clonedList.findIndex((item) => item.id === id);
    const editedItem = clonedList[index];

    editedItem.completed = !editedItem.completed;
    setList(clonedList);
  }

  // Component
  const TasksItems = list.map((item) => (
    <TaskItem key={item.id} item={item} onCheck={onCheck} />
  ));

  return (
    <div>
        <h1>Shopping List</h1>
        <Sorter listState={[list,setList]} />
      <ul>{TasksItems}</ul>
      <button onClick={openModal}>Add item</button>
    </div>
  )
}
