import React, { useState } from 'react';
import Backcard from './Components/Backcard';
import FrontCard from './Components/FrontCard';
import { useForm, Controller } from 'react-hook-form';
import { InputLabel } from '@mui/material';
import { TextField } from '@mui/material';

// import Form from './Components/Form';
function App() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('00000000000000000');

  const onSubmit = data => console.log(data);
  const { register, control, handleSubmit, watch, formState: { errors }, } = useForm();
  const cardNameOnChange = () => setName(watch('name'));
  const cardNumberOnChange = () =>  setNumber(watch('number'));
  // console.log(typeof watch('number'));
  return (

    <div>
      <Backcard/>
      <FrontCard Number={number} Name = {name}/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div><InputLabel htmlFor="name">
        card Name
        </InputLabel>

        <Controller control = {control}
          name = 'name'
          onChange = {cardNameOnChange}
          rules={{ required: true, minLength: 4 }}
          render = {({ field, value }) => {
            return (
              <TextField value={value} {...field} id = 'name' onChange={(e) => setName(e.target.value)}

                helperText={errors.title && 'Title is required'}/>
            );
          }}/>

        {/* <input placeholder='e.g. Ademola Ogunmokun'
          name='name'  type= 'text'  {...register('name', {
            required: true,
            minLength: 4,
            onChange : cardNameOnChange })}/>
        {errors.name && <p>This field is required with minimum of 4 word</p>} */}
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
