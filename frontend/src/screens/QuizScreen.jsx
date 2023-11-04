import React, { useState, useEffect } from 'react';

const QuizScreen = () => {
  const [data, setData] = useState();
  console.log('data', data);
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
  }, []);

  return (
    <div className='quiz-container'>
      <div>
        <h2>{data?.title || 'quiz title'}</h2>
        <p>{data?.description || 'description'}</p>
        <p>{data?.score || null}</p>
        <a href={data?.url}>{data?.url}</a>
      </div>
      {data?.questions_answers.map((item) => (
        <div key={item.id} className='question-answer'>
          <p>{item.text}</p>
          {item.answers.map((answer) => (
            <p>{answer.text}</p>
          ))}
        </div>
      ))}
      <div className='d-flex row w-100 justify-around'>
        <button>Submit</button>
        <button>Reset</button>
        <button>Edit</button>
        <button>Save</button>
      </div>
    </div>
  );
};

export default QuizScreen;
