import React, { useState } from 'react';
import Backcard from './Components/backcard';
import FrontCard from './Components/FrontCard';
import { useForm, } from 'react-hook-form';
import Form from './Components/Form';



function App() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('00000000000000000');
  const [cvv, setCvv] = useState('000');
  const [month, setMonth] = useState('00');
  const [year, setYear] = useState('00');

  const onSubmit = data => console.log(data);
  const { register, handleSubmit, watch, formState: { errors }, } = useForm();
  const cardNameOnChange = () => setName(watch('name'));
  const cardNumberOnChange = () =>  setNumber(watch('number'));
  const cvvOnchange = () => setCvv(watch('cvc'));
  const monthOnchange = () => setMonth(watch('month'));
  const yearOnChange = () => setYear(watch('year'));

  return (

    <div>
      <Backcard cvv={cvv}/>
      <FrontCard Number={number} Name = {name} month = {month} year = {year}/>
      <Form onSubmit={onSubmit} register = {register} errors = {errors} handleSubmit = {handleSubmit}
        cardNameOnChange = {cardNameOnChange} cardNumberOnChange = {cardNumberOnChange} cvvOnchange = {cvvOnchange}
        monthOnchange = {monthOnchange} yearOnChange = {yearOnChange}/>
    </div>
  );
}

export default App;
