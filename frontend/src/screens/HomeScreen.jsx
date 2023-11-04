import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
  const navigate = useNavigate();
  return (
    <div className='home-screen-container'>
      <div className='quiz-list'>
        <h4>Quiz Bank</h4>
        <div className='column'>
          <h4>Quiz1</h4>
          <button>Edit</button>
        </div>
        <div className='column'>
          <h4>Quiz2</h4>
          <button>Edit</button>
        </div>
      </div>
      <div className='column'>
        <h3 className='m-4'>Welcome to the Quiz Creator</h3>
        <button className='btn' onClick={() => navigate('/new-quiz')}>
          Add Quiz
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
