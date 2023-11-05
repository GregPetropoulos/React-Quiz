import React, { useRef, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const EditQuiz = ({ currentEdit, setCurrentEdit, setQuizBank }) => {
  const [isEditSubmitted, setIsEditSubmitted] = useState(false);
  useEffect(() => {
    if (isEditSubmitted === true) {
      setIsEditSubmitted(false);
      setQuizBank((prev) => [...prev, currentEdit]);
    }
  }, [isEditSubmitted]);

  const titleRef = useRef();
  const urlRef = useRef();
  const descriptionRef = useRef();
  // EDIT THIS STATE AND PUSH BACK IN TO THE quizBank
  const handleReset = () => {
    urlRef.current.value = '';
    titleRef.current.value = '';
    descriptionRef.current.value = '';
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentEdit((prev) => ({
      ...prev,
      id: `edited--${uuidv4()}`,
      title: titleRef?.current?.value || currentEdit.title,
      description: descriptionRef?.current?.value || currentEdit.description,
      url: urlRef?.current?.value || currentEdit.url
    }));
    setIsEditSubmitted(true);
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
