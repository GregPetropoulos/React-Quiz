import {
  GET_DATA,
  EDIT_DATA,
  SET_ALERT,
  DATA_ERROR,
  CLEAR_DATA,
  IS_SUBMITTED,
  INCREMENT_ID
} from './types';

const quizReducer = (state, action) => {
  switch (action.type) {
    // * CRUD OPS
    case GET_DATA:
      return {
        ...state,
        data: action.payload
      };
    case CLEAR_DATA:
      return {
        ...state,
        data: []
      };
      case IS_SUBMITTED:
        return {
            ...state,
            isSubmitted:action.payload
        }
        case INCREMENT_ID:
            return{
                ...state,
                data:{...state.data,...action.payload}
            }

    default:
      throw new Error(`Unsupported type of: ${action.type} in contactReducer`);
  }
};

export default quizReducer;
