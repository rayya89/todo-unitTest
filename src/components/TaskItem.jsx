export default function TaskItem({ item, editList }) {
    const { name, price, completed } = item;

    function onCheck() {
      const clonedItem = { ...item };
  
      clonedItem.completed = !clonedItem.completed;
      editList(clonedItem);
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