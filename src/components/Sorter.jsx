// Project files
import sortByName from "../scripts/sorter/sortByName";
import sortByPrice from "../scripts/sorter/sortByPrice";
import { useTasks } from "../state/TasksContext"

export default function Sorter() {

  const { tasks, replaceTasks } = useTasks();
    
  return (
    <section className="sorter">
      <span>Sort by:</span>
      <button className="button-secondary" onClick={() => replaceTasks(tasks, sortByName(tasks))}>Name</button>
      <button className="button-secondary" onClick={() => replaceTasks(tasks, sortByPrice(tasks))}>Price</button>
    </section>
  );
}
