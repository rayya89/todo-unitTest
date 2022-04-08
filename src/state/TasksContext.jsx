//NPM Packages
import { createContext, useState, useContext } from 'react';

const Context = createContext(null);

//File from parent
export function TasksProvider({ children }) {
    // State
    const [ tasks, setTasks ] = useState([]);

    // Properties
    const values = { tasks, addItem, editItem, replaceTasks, setTasks };


    // Methods

    // 1. local Storage
    // 2. add TaskItem
    // 3. edit list
    // 4. sorters

    function addItem(name,price){
        const newItem = {
            id: tasks.length,
              name: name,
              price: price,
              completed: false
          };
          setTasks([...tasks,newItem])
    }

    function editItem(editedItem) {
        const clonedList = [...tasks];
        const index = clonedList.findIndex((item) => item.id === editedItem.id);
        clonedList[index] = editedItem;
        setTasks(clonedList);
      }

      function replaceTasks(list, newList) {
        const errorText = "The new list is smaller than the old one";
    
        // Safeguard (ui test #22)
        if (newList.length !== list.length) throw new Error(errorText);
    
        setTasks(newList);
      }

    return <Context.Provider value={values}>{children}</Context.Provider>

}

//File for the children
export function useTasks() {
    const context = useContext(Context);
    const errorMessage = "You need to wrap the parent component with <TasksProvider/>";

    //Safeguards
    if (!context) throw new Error(errorMessage);

    return context;

}