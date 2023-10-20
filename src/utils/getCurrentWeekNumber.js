const getCurrentWeekNumber = (day, date) => {
  switch (day) {
    case 'monday':
      return [
        {
          day: 'Mon',
          date,
        },
        {
          day: 'Tue',
          date: `${Number(date) + 1}`,
        },
        {
          day: 'Wed',
          date: `${Number(date) + 2}`,
        },
        {
          day: 'Thu',
          date: `${Number(date) + 3}`,
        },
        {
          day: 'Fri',
          date: `${Number(date) + 4}`,
        },
        {
          day: 'Sat',
          date: `${Number(date) + 5}`,
        },
        {
          day: 'Sun',
          date: `${Number(date) + 6}`,
        },
      ];
    case 'tuesday':
      return [
        {
          day: 'Mon',
          date: `${Number(date) - 1}`,
        },
        {
          day: 'Tue',
          date,
        },
        {
          day: 'Wed',
          date: `${Number(date) + 1}`,
        },
        {
          day: 'Thu',
          date: `${Number(date) + 2}`,
        },
        {
          day: 'Fri',
          date: `${Number(date) + 3}`,
        },
        {
          day: 'Sat',
          date: `${Number(date) + 4}`,
        },
        {
          day: 'Sun',
          date: `${Number(date) + 5}`,
        },
      ];
    case 'wednesday':
      return [
        {
          day: 'Mon',
          date: `${Number(date) - 2}`,
        },
        {
          day: 'Tue',
          date: `${Number(date) - 1}`,
        },
        {
          day: 'Wed',
          date,
        },
        {
          day: 'Thu',
          date: `${Number(date) + 1}`,
        },
        {
          day: 'Fri',
          date: `${Number(date) + 2}`,
        },
        {
          day: 'Sat',
          date: `${Number(date) + 3}`,
        },
        {
          day: 'Sun',
          date: `${Number(date) + 4}`,
        },
      ];
    case 'thursday':
      return [
        {
          day: 'Mon',
          date: `${Number(date) - 3}`,
        },
        {
          day: 'Tue',
          date: `${Number(date) - 2}`,
        },
        {
          day: 'Wed',
          date: `${Number(date) - 1}`,
        },
        {
          day: 'Thu',
          date,
        },
        {
          day: 'Fri',
          date: `${Number(date) + 1}`,
        },
        {
          day: 'Sat',
          date: `${Number(date) + 2}`,
        },
        {
          day: 'Sun',
          date: `${Number(date) + 3}`,
        },
      ];
    case 'friday':
      return [
        {
          day: 'Mon',
          date: `${Number(date) - 4}`,
        },
        {
          day: 'Tue',
          date: `${Number(date) - 3}`,
        },
        {
          day: 'Wed',
          date: `${Number(date) - 2}`,
        },
        {
          day: 'Thu',
          date: `${Number(date) - 1}`,
        },
        {
          day: 'Fri',
          date,
        },
        {
          day: 'Sat',
          date: `${Number(date) + 1}`,
        },
        {
          day: 'Sun',
          date: `${Number(date) + 2}`,
        },
      ];
    case 'saturday':
      return [
        {
          day: 'Mon',
          date: `${Number(date) - 5}`,
        },
        {
          day: 'Tue',
          date: `${Number(date) - 4}`,
        },
        {
          day: 'Wed',
          date: `${Number(date) - 3}`,
        },
        {
          day: 'Thu',
          date: `${Number(date) - 2}`,
        },
        {
          day: 'Fri',
          date: `${Number(date) - 1}`,
        },
        {
          day: 'Sat',
          date,
        },
        {
          day: 'Sun',
          date: `${Number(date) + 1}`,
        },
      ];
    case 'sunday':
      return [
        {
          day: 'Mon',
          date: `${Number(date) - 6}`,
        },
        {
          day: 'Tue',
          date: `${Number(date) - 5}`,
        },
        {
          day: 'Wed',
          date: `${Number(date) - 4}`,
        },
        {
          day: 'Thu',
          date: `${Number(date) - 3}`,
        },
        {
          day: 'Fri',
          date: `${Number(date) - 2}`,
        },
        {
          day: 'Sat',
          date: `${Number(date) - 1}`,
        },
        {
          day: 'Sun',
          date,
        },
      ];
    default:
      return;
  }
};

export default getCurrentWeekNumber;
