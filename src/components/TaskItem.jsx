import {useTasks} from "../state/TasksContext"

export default function TaskItem({ item }) {
    const { editItem } = useTasks();
    const { name, price, completed } = item;

    function onCheck() {
      const clonedItem = { ...item };
      clonedItem.completed = !clonedItem.completed;
      editItem(clonedItem);
    }
  
    return (
      <li>
        <input type="checkbox"checked={completed}
          onChange={onCheck}
        />
        {name}, {price}:-
      </li>
    );
  }