import React from 'react'

export default function Sorter({ listState }) {

    const [list, setList] =listState;

  // Methods
  function sortByName() {
    const clonedList = [...list];
    const sortedList = clonedList.sort((a, b) => {
      const productA = a.name.toUpperCase();
      const productB = b.name.toUpperCase();

      return productA > productB ? 1 : -1;
    });

    setList(sortedList);
  }

  function sortByPrice() {
    const clonedList = [...list];
    clonedList.sort((a, b) => b.price - a.price);

    setList(clonedList);
  }

  return (
    <section>
      Sort by:
      <button onClick={sortByName}>Name</button>
      <button onClick={sortByPrice}>Price</button>
    </section>
  );
}
