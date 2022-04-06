export default function validateName(string) {
    const parsedString = string.trim();
    const validation = parsedString.length > 0;
    const data = validation ? parsedString : "";
    const error = validation ? "" : "You must enter the product name";
  
    return { data: data, error: error };
  }