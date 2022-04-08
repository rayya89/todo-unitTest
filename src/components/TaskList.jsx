// Project files
import TaskItem from "./TaskItem";

export default function TaskList({ list }) {
    const TaskItems = list.map((item) => ( <TaskItem key={item.id} item={item} />));
    
      // Safeguard (ui test #23)
      if (list.length === 0) return <p>This list has no items to show</p>;
    
      return <ul>{TaskItems}</ul>;
    }


