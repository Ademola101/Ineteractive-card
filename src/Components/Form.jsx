
import React from 'react';
import { FormStyle } from './styles/Form.style';
const Form = ({ handleSubmit, onSubmit, register,errors ,cardNameOnChange,
  cardNumberOnChange, cvvOnchange, monthOnchange, yearOnChange }) => {
  // const [error] = useState(
  //   errors.name ? true : false
  // );

  console.log(errors.name);
  const borderStyle = {
    boder :'solid hsl(240deg 7% 62%)'
  };


  return (
    <FormStyle   onSubmit={handleSubmit(onSubmit)}>
      <div><label htmlFor="name" className='namelabel'>
        <strong>

        CARDHOLDER NAME
        </strong>

      </label> <br />

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

      <input className='nameinput' style={{ ...borderStyle, border: errors.name && 'solid red' }}
        placeholder='e.g. Ademola Ogunmokun'
        name='name'  type= 'text'  {...register('name', {
          required: 'required',
          pattern: {
            value: /\w+\s\w+/,
            message: 'First name and last name required'
          },
          // minLength: {
          //   value: 2, message: 'error message'

          // },
          onChange : cardNameOnChange,

          message: 'First name and last name required seperated by space' })}/>
      {errors.name && errors.name.type ==='required' && <div className='error'>
        {errors.name.message}</div>}
      {errors.name && errors.name.type ==='pattern' && <div className='error'>
        {errors.name.message}</div>}
      {/* {errors.name && <div className='error'>{errors.name.message}</div>} */}
      </div>
      <div><label className='numberlabel' htmlFor="number">
        <strong>
        CARD NUMBER

        </strong>

      </label>
      <input placeholder='e.g. 123456789012' className='numberinput' style={{ ...borderStyle,
        border: errors.number && 'solid red' }}
      name='number'   type= 'number'  {...register('number', { required: 'This field is required',
        minLength: {
          value: 16,
          message: 'Card number should be 16 digits'

        },
        onChange : cardNumberOnChange } )}/>
      {errors.number &&  errors.number.type === 'required' && <div className='error'>{errors.number.message}</div>}
      {errors.number &&  errors.number.type === 'minLength' && <div className='error'>{errors.number.message}</div>}
      </div>

      <div>

        <span> <label htmlFor="month" className='monthlabel'>

          <strong>
          EXP. DATE &#123;MM/YY&#125;

          </strong>
        </label> </span> <span> <label className='cvvlabel' htmlFor="cvc">
          <strong>
          CVC
          </strong>
        </label></span>

        <div >
          <input type="number" className='monthinput'style={{ ...borderStyle, border: errors.month && 'solid red' }}
            placeholder='MM' name='month' {...register('month', { required: true,
              onChange: monthOnchange, })}  />

          <input type="number" style={{ ...borderStyle, border: errors.year && 'solid red' }}
            placeholder='YY' className='yearinput' name='year' {...register('year', { required: true, onChange: yearOnChange })}  />
          <input type="number" className='cvvinput' style={{ ...borderStyle, border: errors.cvc && 'solid red' }}
            placeholder='e.g 123' name='cvc' {...register('cvc', {
              required: true,  onChange : cvvOnchange  })}
          />

          {errors.month && <div className='error-month'> month is required </div>}
          {errors.year && <div className='error-year'> year is required </div>}
          {errors.cvc && <div className='error-cvv'> cvc is required </div>}
        </div>

      </div>


      <button type='submit'> Confirm</button>
    </FormStyle>

  );
};

export default Form;
