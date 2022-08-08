// import React from 'react';
// // import { useForm } from 'react-hook-form';

// const Form = ({  cardNameOnChange, onSubmit }) => {

//   console.log(watch('name'));
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div><label htmlFor="name">
//         card Name
//       </label>
//       <input placeholder='e.g. Ademola Ogunmokun'
//         name='name'  type= 'text' onChange={cardNameOnChange} {...register('name', { required: true, minLength: 4 })}/>
//       {errors.name && <p>This field is required with minimum of 4 wordd</p>}
//       </div>
//       <button type='submit'> submit</button>
//     </form>
//   );
// };

// export default Form;



// const Form = () => {
//   return (
//     <div>
//       hello
//     </div>
//   );
// };

// export default Form;

import React from 'react';

const Form = ({ handleSubmit, onSubmit, register,errors ,cardNameOnChange, cardNumberOnChange }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div><label htmlFor="name">
        card Name
      </label>

      {/* <Controller control = {control}
          name = 'name'
          onChange = {cardNameOnChange}
          rules={{ required: true, minLength: 4 }}
          render = {({ field, value }) => {
            return (
              <TextField value={value} {...field} id = 'name' onChange={(e) => setName(e.target.value)}

                helperText={errors.title && 'Title is required'}/>
            );
          }}/> */}

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

      <div>


      </div>


      <button type='submit'> submit</button>
    </form>

  );
};

export default Form;
