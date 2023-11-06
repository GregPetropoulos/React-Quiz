import { useReducer } from 'react';
import { QuizContext } from './quizContext';
import quizReducer from './quizReducer';
import { GET_DATA } from './types';

export const getData = async (dispatch) => {
  try {
    const response = await window.fetch('../../data/data.json');
    if (!response.ok) {
      throw new Error(
        ` Error Status Code ${response.status} Message: ${response.statusText}`
      );
    } else {
      const jsonData = await response.json();
      dispatch({
        type: GET_DATA,
        payload: jsonData
      });
    }
  } catch (err) {
    console.log(`Network Error ${err}`);
  }
};

const QuizState = (props) => {
  const initialState = {
    data: null,
    isSubmitted:false,
    quizBank:[]
  };
  const [state, dispatch] = useReducer(quizReducer, initialState);
  return (
    <QuizContext.Provider value={{ state: state, dispatch }}>
      {props.children}
    </QuizContext.Provider>
  );
};

export default QuizState;
