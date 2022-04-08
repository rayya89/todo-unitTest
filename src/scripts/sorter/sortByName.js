export default function sortByName(list) {
    const errorText = "the List contains an empty name, please add a valid name to sort";
    const clonedList = [...list];
    const sortedList = clonedList.sort((a, b) => {
      const productA = a.name.toUpperCase();
      const productB = b.name.toUpperCase();
      if (productA.trim().length === 0 || productB.trim().length === 0 ) throw new Error(errorText);
      return productA > productB ? 1 : -1;
    });
    return sortedList;
  }
