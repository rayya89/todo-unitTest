export default function sortByPrice(list) {
  const errorText = "A price can't be 0 or negative";
    const clonedList = [...list];
    const sortedList = clonedList.sort((a, b) => b.price - a.price);
    if (list.find((item) => item.price <= 0)) throw new Error(errorText);
    return sortedList;
  }
  