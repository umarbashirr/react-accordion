import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function SingleQuestion({ title, info }) {
  const [click, setClick] = useState(false);

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button
          className='btn'
          onClick={() => {
            setClick(!click);
          }}
        >
          {click ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p>{click && info}</p>
    </article>
  );
}

export default SingleQuestion;
