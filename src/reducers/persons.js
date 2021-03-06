const personsReducerDefaultState = [];

export default (state = personsReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_PERSON":
      return [...state, action.person];
    case "REMOVE_PERSON":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_PERSON":
      return state.map(person => {
        if (person.id === action.id) {
          return {
            ...person,
            ...action.updates
          };
        } else {
          return person;
        }
      });
    case "GET_PERSONs":
      return action.persons;
    default:
      return state;
  }
};
