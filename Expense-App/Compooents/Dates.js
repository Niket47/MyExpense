export const FormateDates = dateString => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
  // return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  // You can pass options to toLocaleDateString for custom formatting
};
