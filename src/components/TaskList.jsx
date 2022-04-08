// Project files
import TaskItem from "./TaskItem";

export default function TaskList({ list }) {
    const TaskItems = list.map((item) => ( <TaskItem key={item.id} item={item} />));
    
      // Safeguards
      if (list.length === 0) return <p>Your shopping list is empty</p>;
    
      return <ul>{TaskItems}</ul>;
    }


