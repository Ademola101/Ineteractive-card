import React from 'react';
import { useForm } from 'react-hook-form';
const Form = ({ nameValue, cardNameOnChange, onSubmit }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div><label htmlFor="name">
        card Name
      </label>
      <input placeholder='e.g. Ademola Ogunmokun'
        name='name' value={nameValue} type= 'text' onChange={cardNameOnChange} {...register('name', { required: true, minLength: 4 })}/>
      {errors.name && <p>This field is required with minimum of 4 wordd</p>}
      </div>
      <button type='submit'> submit</button>
    </form>
  );
};

export default Form;
