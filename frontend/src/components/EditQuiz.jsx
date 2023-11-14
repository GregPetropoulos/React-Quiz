import React, { useRef, useContext } from 'react';
import { QuizContext } from '../context/quizContext';

const EditQuiz = () => {
  const { state, dispatch } = useContext(QuizContext);
  const {  currentEdit } = state;

  const titleRef = useRef();
  const urlRef = useRef();
  const descriptionRef = useRef();

  const handleReset = () => {
    urlRef.current.value = '';
    titleRef.current.value = '';
    descriptionRef.current.value = '';
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const quizEdited = {
      ...currentEdit,
      editDate: new Date(),
      title: titleRef?.current?.value || currentEdit.title,
      description: descriptionRef?.current?.value || currentEdit.description,
      url: urlRef?.current?.value || currentEdit.url
    };
    dispatch({ type: 'UPDATE_QUIZBANK', payload: { quizEdited } });
  };

  return (
    <form className='column' onSubmit={handleSubmit}>
      <h2>Title: {currentEdit.title}</h2>
      <label className='m-4'>
        Title:
        <input className='m-4' name='title' type='text' ref={titleRef} />
      </label>
      <p>Description :{currentEdit.description}</p>

      <label className='m-4'>
        Description
        <input
          className='m-4'
          name='description'
          type='text'
          ref={descriptionRef}
        />
      </label>
      <p>Score {currentEdit.score || null}</p>

      <a href={currentEdit.url}>
        <p>Youtube Link : {currentEdit?.url}</p>
      </a>
      <label className='m-4'>
        Link:
        <input className='m-4' name='url' type='text' ref={urlRef} />
      </label>
      {currentEdit.questions_answers.map((question) => (
        <div key={question.id} className='question-answer'>
          <h4 className='text-center'>{question.text}</h4>

          {question.answers.map((answer) => (
            <div key={answer.id} className='column'>
              <button type='button'>{answer.text}</button>
            </div>
          ))}
        </div>
      ))}
      <button>Save Edits</button>
      <button type='button' onClick={handleReset}>
        Reset
      </button>
    </form>
  );
};
export default EditQuiz;
