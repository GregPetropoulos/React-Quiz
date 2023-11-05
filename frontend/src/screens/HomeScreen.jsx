import React, { useState, useEffect } from 'react';
import ModalQuiz from '../components/ModalQuiz';

const HomeScreen = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [data, setData] = useState();
  const [quizBank, setQuizBank] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentEdit, setCurrentEdit] = useState({});

  //TODO IMPLEMENT CONTEXT
  //TODO IMPLEMENT MORE PROPTYPES
  //TODO ADD TESTING
  useEffect(() => {
    let unmount = true;

    if (unmount) {
      try {
        const fetchData = async () => {
          const response = await window.fetch('../../data/data.json');
          if (!response.ok) {
            throw new Error(
              ` Error Status Code ${response.status} Message: ${response.statusText}`
            );
          } else {
            const jsonData = await response.json();
            setData(jsonData);
          }
        };
        fetchData();
      } catch (err) {
        console.log(`Network Error ${err}`);
      }
    }

    return () => (unmount = false);

    // When the submission occurs quizBank will change and we watch for it, run a fetch call to get fresh response into data state variable
  }, [quizBank.length]);

  if (isSubmitted === true) {
    // Once the form is submitted from the modal, reset the state and save the quiz to the quiz bank
    setQuizBank((prev) => [...prev, data]);
    setIsSubmitted(false);
    setData([]);
  }
  const EditQuiz = ({ currentEdit }) => {
    return (
      <div className='column'>
        <h2>Title: {currentEdit.title || 'quiz title'}</h2>
        <p>Description :{currentEdit.description || 'description'}</p>
        <p>Score {currentEdit.score || null}</p>
        <a href={currentEdit.url}>Youtube Link : {data?.url}</a>
        {currentEdit.questions_answers.map((element) => (
          <div key={element.id} className='question-answer'>
            <h4 className='text-center'>{element.text}</h4>
            {element.answers.map((answer) => (
              <div key={answer.id} className='column'>
                <button type='button'>{answer.text}</button>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };
  const handleEdit = (item) => {
    setIsEdit(!isEdit);
    setCurrentEdit(item);
    console.log('ITEM CLICKED ON TO EDIT', item);
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
      {isEdit ? <EditQuiz currentEdit={currentEdit} /> : null}
      <div className='column justify-center w-100'>
        <h3 className='m-4'>Welcome to the Quiz Creator</h3>
        {!isOpenModal && (
          <button
            className='btn w-100'
            onClick={() => setIsOpenModal(!isOpenModal)}>
            Add Quiz
          </button>
        )}
      </div>
      {isOpenModal && (
        <ModalQuiz
          data={data}
          setData={setData}
          setIsSubmitted={setIsSubmitted}
          setIsOpenModal={setIsOpenModal}
        />
      )}
    </div>
  );
};

export default HomeScreen;
