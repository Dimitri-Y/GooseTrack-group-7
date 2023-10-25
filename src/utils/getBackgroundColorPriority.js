const getBackgroundColorPriority = (priority) => {
  switch (priority.toLowerCase()) {
    case 'low':
      return '#72c2f8';
    case 'medium':
      return '#F3B249';
    case 'high':
      return '#EA3D65';
    default:
      return '#F3B249';
  }
};

export default getBackgroundColorPriority;
