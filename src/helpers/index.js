export const generateDropdownOptions = array => {
  return array.map(item => {
    return { key: item.id, text: item.name || item, value: item.id || item };
  });
};
