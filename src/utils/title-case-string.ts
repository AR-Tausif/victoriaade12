export const titleCase = (inputString: string) => {
  return inputString
    .split(" ") // Split the string into an array of words
    .map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() // Capitalize first letter of each word
    )
    .join(" "); // Join the words back into a single string
};


// Utility function to convert string to Title Case
export const toTitleCase = (str: string): string => {
  return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

