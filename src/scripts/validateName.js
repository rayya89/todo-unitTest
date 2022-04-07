export default function validateName(string) {
    const parsedString = string.replace(/^\s+|\s+$|\s+(?=\s)/g, "");
    const validation = parsedString.length > 0;
    const data = validation ? parsedString : "";
    const error = validation ? "" : "You must enter the product name";
  
    return { data: data, error: error };
  }