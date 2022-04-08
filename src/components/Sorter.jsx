// Project files
import sortByName from "../scripts/sorter/sortByName";
import sortByPrice from "../scripts/sorter/sortByPrice";
import { useTasks } from "../state/TasksContext"

export default function Sorter() {

  const { tasks, replaceTasks } = useTasks();
    
  return (
    <section>
      Sort by:
      <button onClick={() => replaceTasks(tasks, sortByName(tasks))}>Name</button>
      <button onClick={() => replaceTasks(tasks, sortByPrice(tasks))}>Price</button>
    </section>
  );
}
