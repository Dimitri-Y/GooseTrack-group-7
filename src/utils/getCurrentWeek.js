const getCurrentWeek = (day, date) => {
  switch (day) {
    case 'monday':
      return [
        date,
        `${Number(date) + 1}`,
        `${Number(date) + 2}`,
        `${Number(date) + 3}`,
        `${Number(date) + 4}`,
        `${Number(date) + 5}`,
        `${Number(date) + 6}`,
      ];
    case 'tuesday':
      return [
        `${Number(date) - 1}`,
        date,
        `${Number(date) + 1}`,
        `${Number(date) + 2}`,
        `${Number(date) + 3}`,
        `${Number(date) + 4}`,
        `${Number(date) + 5}`,
      ];
    case 'wednesday':
      return [
        `${Number(date) - 2}`,
        `${Number(date) - 1}`,
        date,
        `${Number(date) + 1}`,
        `${Number(date) + 2}`,
        `${Number(date) + 3}`,
        `${Number(date) + 4}`,
      ];
    case 'thursday':
      return [
        `${Number(date) - 3}`,
        `${Number(date) - 2}`,
        `${Number(date) - 1}`,
        date,
        `${Number(date) + 1}`,
        `${Number(date) + 2}`,
        `${Number(date) + 3}`,
      ];
    case 'friday':
      return [
        `${Number(date) - 4}`,
        `${Number(date) - 3}`,
        `${Number(date) - 2}`,
        `${Number(date) - 1}`,
        date,
        `${Number(date) + 1}`,
        `${Number(date) + 2}`,
      ];
    case 'saturday':
      return [
        `${Number(date) - 5}`,
        `${Number(date) - 4}`,
        `${Number(date) - 3}`,
        `${Number(date) - 2}`,
        `${Number(date) - 1}`,
        date,
        `${Number(date) + 1}`,
      ];
    case 'sunday':
      return [
        `${Number(date) - 6}`,
        `${Number(date) - 5}`,
        `${Number(date) - 4}`,
        `${Number(date) - 3}`,
        `${Number(date) - 2}`,
        `${Number(date) - 1}`,
        date,
      ];
    default:
      return;
  }
};

export default getCurrentWeek;

// return [
//   date,
//   isLastDay ? `1` : `${Number(date) + 1}`,
//   isLastDay ? `${1 + 1}` : `${Number(date) + 1}`,
//   isLastDay ? `${1 + 2}` : `${Number(date) + 1}`,
//   isLastDay ? `${1 + 3}` : `${Number(date) + 1}`,
//   isLastDay ? `${1 + 4}` : `${Number(date) + 1}`,
//   isLastDay ? `${1 + 5}` : `${Number(date) + 1}`,
// ];
