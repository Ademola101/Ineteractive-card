import React, { useState } from 'react';
import Backcard from './Components/Backcard';
import FrontCard from './Components/FrontCard';
import { useForm } from 'react-hook-form';
// import Form from './Components/Form';
function App() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('00000000000000000');

  const onSubmit = data => console.log(data);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const cardNameOnChange = () => setName(watch('name'));
  const cardNumberOnChange = () =>  setNumber(watch('number'));
  // console.log(typeof watch('number'));
  return (

    <div>
      <Backcard/>
      <FrontCard Number={number} Name = {name}/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div><label htmlFor="name">
        card Name
        </label>
        <input placeholder='e.g. Ademola Ogunmokun'
          name='name'  type= 'text'  {...register('name', {
            required: true,
            minLength: 4,
            onChange : cardNameOnChange })}/>
        {errors.name && <p>This field is required with minimum of 4 word</p>}
        </div>
        <div><label htmlFor="number">
        card number
        </label>
        <input placeholder='e.g. 123456789012'
          name='number' maxLength={16}  type= 'number'  {...register('number', { required: true, max: 16, min: 16,
            onChange : cardNumberOnChange } )}/>
        {errors.name && <p>This field is required with 16 digits</p>}
        </div>


        <button type='submit'> submit</button>
      </form>
    </div>
  );
}

export default App;
