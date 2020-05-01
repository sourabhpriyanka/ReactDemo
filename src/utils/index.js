export const sortByAlphabet = (items, fieldName, filterStatus) => {
  return items.sort((a, b) => {
    const textA =
      filterStatus === 1
        ? a[fieldName].toUpperCase()
        : b[fieldName].toUpperCase();
    const textB =
      filterStatus === 1
        ? b[fieldName].toUpperCase()
        : a[fieldName].toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });
};

export const sortByAscending = (items, fieldName, filterStatus) => {
  return items.sort((a, b) => {
    return filterStatus === 1
      ? a[fieldName] - b[fieldName]
      : b[fieldName] - a[fieldName];
  });
};
