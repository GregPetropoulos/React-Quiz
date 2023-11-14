import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { QuizContext } from '../context/quizContext';

const ModalQuiz = ({ setIsOpenModal }) => {
  const { state, dispatch } = useContext(QuizContext);
  const { data } = state;
  const [selected, setSelected] = useState('');
  const [isDisabled, setDisabled] = useState(false);
  const [isFeedback, setIsFeedback] = useState(false);
  const handleAnswer = (answer, answerId) => {
    setSelected(answer);
    if (answerId === null) {
      // When an answer is chosen, set the answer_id accordingly and increment score if is_true ===true
      dispatch({ type: 'UPDATE_SCORE', payload: { answer, answerId } });
      setIsFeedback(true);
    }
    if (answer.is_true === false) {
      setIsFeedback(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // If we have answer_id for each question then its ready for submission
    // Create a new data and update the quiz bank,
    const isAnswersChosen = data.questions_answers.find(
      (item) => item.answer_id !== null
    );
    if (isAnswersChosen) {
      const newQuiz = data;
      newQuiz.id = uuidv4();
      dispatch({ type: 'ADD_TO_QUIZBANK', payload: { newQuiz } });
    }
    setIsOpenModal(false);
    //TODO SET THE SCORE TO 0 if all the answer_id are null
  };

  if (data === null || data === undefined) {
    return null;
  }
  return (
    <div className='background-overlay'>
      <div className='quiz-container'>
        <div>
          <h2>Title: {data?.title || 'quiz title'}</h2>
          <p>Description :{data?.description || 'description'}</p>
          <p>Score {data?.score || null}</p>
          <a href={data?.url}>Youtube Link : {data?.url}</a>
        </div>
        {data?.questions_answers?.map((item, index) => {
          return (
            <div key={item?.id} className='question-answer'>
              <h4 className='text-center'>{item?.text}</h4>
              {item?.answers?.map((answer) => {
                return (
                  <div key={answer?.id} className='column'>
                    <button
                      type='button'
                      onClick={() => handleAnswer(answer, item?.answer_id)}
                      className={
                        selected === answer && isFeedback ? 'selected' : 'btn'
                      }>
                      {answer.text}
                    </button>
                  </div>
                );
              })}
              <button disabled>Edit</button>
              {index === data?.questions_answers.length - 1 && (
                <div className='d-flex row w-100 justify-around'>
                  <button
                    type='submit'
                    disabled={isDisabled}
                    onClick={(e) => handleSubmit(e)}>
                    Submit
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ModalQuiz;
