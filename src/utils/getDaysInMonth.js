const getDaysInMonth = (date) => {
  const currentYear = date.split('-').slice(0, 1).join('');
  const currentMonth = date.split('-').slice(1, 2).join('');
  console.log(currentMonth);

  return new Date(currentYear, currentMonth, 0).getDate();
};

export default getDaysInMonth;
