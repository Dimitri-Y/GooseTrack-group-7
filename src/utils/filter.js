const filter = (array, property, filter) => {
  return array.filter((item) => item[property] === filter);
};

export default filter;
