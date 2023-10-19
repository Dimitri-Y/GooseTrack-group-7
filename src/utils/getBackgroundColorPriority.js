const getBackgroundColorPriority = (priority) => {
  switch (priority) {
    case 'Low':
      return '#72c2f8';
    case 'Medium':
      return '#F3B249';
    case 'Hight':
      return '#EA3D65';
    default:
      return '#F3B249';
  }
};

export default getBackgroundColorPriority;
