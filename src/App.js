import React, { useState } from 'react';
import Backcard from './Components/backcard';
import Form from './Components/Form';
function App() {
  const [name, setName] = useState('');
  const cardNameOnchange = e => setName(e.target.value);
  const onSubmit = data => console.log(data);
  return (

    <div>
      <Backcard/>
      <Form  onSubmit={onSubmit} cardNameOnChange={cardNameOnchange}/>
    </div>
  );
}

export default App;
