import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <React.Fragment>
      <SingleQuestion questions={questions} />
    </React.Fragment>
  );
}

export default App;
