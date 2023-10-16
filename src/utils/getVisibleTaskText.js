const getVisibleTaskText = (string, condition) => {
  return string.length > condition
    ? `${string.split('').slice(0, condition).join('')}...`
    : string;
};

export default getVisibleTaskText;
