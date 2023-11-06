import {
  GET_DATA,
  EDIT_DATA,
  SET_ALERT,
  DATA_ERROR,
  CLEAR_DATA,
  INCREMENT_ID,
  UPDATE_SCORE,
  ADD_TO_QUIZBANK
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
    case INCREMENT_ID:
    return{
        ...state,
        data:{...state.data,...action.payload}
    };
    case UPDATE_SCORE:
        return {
            ...state,
            data:{...state.data,
                    score:action.payload.answer.is_true? state.data.score+1: state.data.score,
                    questions_answers:[...state.data.questions_answers?.map((item) => item.answers.find((item) => item === action.payload.answer)
                        ? { ...item, answer_id: action.payload.answer.id }
                        : item
                    )]
                }
                    
        };
    case ADD_TO_QUIZBANK:{
        return {
            ...state,
            quizBank:[...state.quizBank,action.payload.newQuiz]
        }
    }

    default:
      throw new Error(`Unsupported type of: ${action.type} in contactReducer`);
  }
};

export default quizReducer;
