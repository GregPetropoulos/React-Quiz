import React, { useState, useEffect, useContext } from 'react';
import ModalQuiz from '../components/ModalQuiz';
import EditQuiz from '../components/EditQuiz';
import { getData } from '../context/QuizState';
import { QuizContext } from '../context/quizContext';

const HomeScreen = () => {
  const { state, dispatch } = useContext(QuizContext);
  const { data, quizBank } = state;
  
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currentEdit, setCurrentEdit] = useState();

  // TODO IMPLEMENT CONTEXT API
  // TODO IMPLEMENT ROBUST PROPTYPES
  // TODO ADD TESTING
  // TODO SEVERAL BUTTONS NEED DISABLED LOGIC

  useEffect(() => {
    let unmount = true;

    if (unmount) {
      getData(dispatch);
    }

    
    // When the submission occurs quizBank will change and we watch for it, run a fetch call to get fresh response into data state variable
    return () => (unmount = false);
  }, [quizBank.length]);

  const handleEdit = (item) => {
    setIsEdit(!isEdit);
    setCurrentEdit(item);
  };
  return (
    <div className='home-screen-container'>
      {quizBank.length > 0
        ? quizBank.map((item) => (
            <div key={item.id} className='row w-100 justify-center'>
              <h4>Title: {item.title}</h4>
              <p>Score:{item.score}</p>
              <div className='column'>
                <h4 className='w-100'>{item.title}</h4>
                <button type='button' onClick={() => handleEdit(item)}>
                  {isEdit && item === currentEdit ? 'Close' : 'Edit'}
                </button>
              </div>
            </div>
          ))
        : null}
      {isEdit ? (
        <EditQuiz
          // setQuizBank={setQuizBank}
          quizBank={quizBank}
          setCurrentEdit={setCurrentEdit}
          currentEdit={currentEdit}
        />
      ) : null}
      <div className='column justify-center w-100'>
        <h3 className='m-4'>Welcome to the Quiz Creator</h3>
        {!isOpenModal && (
          <button className='btn w-100' onClick={() => setIsOpenModal(true)}>
            Add Quiz
          </button>
        )}
      </div>
      {isOpenModal && <ModalQuiz setIsOpenModal={setIsOpenModal} />}
    </div>
  );
};

export default HomeScreen;
