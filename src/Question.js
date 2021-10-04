import React from 'react';
import SingleQuestion from './SingleQuestion';
const Question = ({ questions }) => {
  return (
    <main>
      <div className='container'>
        <h3>Questions and answers about login</h3>
        <section className='info'>
          {questions.map((ques) => (
            <SingleQuestion key={ques.id} {...ques} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default Question;
