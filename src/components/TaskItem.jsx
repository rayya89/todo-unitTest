export default function TaskItem({ item, onCheck }) {
    const { id, name, price, completed } = item;
  
    return (
      <li>
        <input type="checkbox"checked={completed}
          onChange={() => onCheck(id)}
        />
        {name}, {price}:-
      </li>
    );
  }