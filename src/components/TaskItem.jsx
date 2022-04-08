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
      <li className="task-item">
        <div className="item-name">
          <input type="checkbox"checked={completed} onChange={onCheck}/>
          <span>{name},</span>
        </div>
        <span>{price}:-</span>
      </li>
    );
  }