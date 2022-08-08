
import React from 'react';

const Form = ({ handleSubmit, onSubmit, register,errors ,cardNameOnChange, cardNumberOnChange, cvvOnchange }) => {
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
        name='number'   type= 'number'  {...register('number', { required: true, max: 16, min: 16,maxLength:16,
          onChange : cardNumberOnChange } )}/>
      {errors.name && <p>This field is required with 16 digits</p>}
      </div>

      <div>

        <span> <label htmlFor="month">EXP. DATE &#123;MM/YY&#125;</label> </span> <span> <label htmlFor="cvc">CVC</label></span>

        <div>
          <input type="number"
            required placeholder='MM' name='month' {...register('month', { required: true, max: 2, maxLength:2 })}  />
          <input type="number"
            required placeholder='YY' name='year' {...register('year', { required: true, max: 2, maxLength:2 })}  />
          <input type="number"
            required placeholder='e.g 123' name='cvc' {...register('cvc', {
              required: true, max: 2, maxLength:2, onChange : cvvOnchange  })}
          />


        </div>

      </div>


      <button type='submit'> submit</button>
    </form>

  );
};

export default Form;
