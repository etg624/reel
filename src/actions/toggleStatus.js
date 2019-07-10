export const TOGGLE_STATUS = 'TOGGLE_STATUS';
export const toggleStatus = (status, id) => {
  return {
    type: TOGGLE_STATUS,
    status,
    id
  };
};
