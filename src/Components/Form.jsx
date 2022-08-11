
import React from 'react';
import { FormStyle } from './styles/Form.style';
const Form = ({ handleSubmit, onSubmit, register,errors ,cardNameOnChange,
  cardNumberOnChange, cvvOnchange, monthOnchange, yearOnChange }) => {

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

      <input className='nameinput' id='name' style={{ ...borderStyle, border: errors.name && 'solid red 2px' }}
        placeholder='e.g. Ademola Ogunmokun'
        name='name'  type= 'text'  {...register('name', {
          required: 'Cant\'t be blank',
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
      <input id='number' placeholder='e.g. 123456789012' className='numberinput' style={{ ...borderStyle,
        border: errors.number && 'solid red 2px' }}
      name='number'   type= 'number'  {...register('number', { required: 'Cant\t be blank',
        minLength: {
          value: 16,
          message: 'Card number should be 16 digits'

        },
        maxLength: {
          value: 16,
          message: 'Card number should not be more than 16 digits'

        },
        pattern : {
          value: /^[0-9]{16}$/,
          message: 'Card number should be 16 digits'
        },
        onChange : cardNumberOnChange } )}/>
      {errors.number &&  errors.number.type === 'required' && <div className='error'>{errors.number.message}</div>}
      {errors.number &&  errors.number.type === 'minLength' && <div className='error'>{errors.number.message}</div>}
      {errors.number &&  errors.number.type === 'maxLength' && <div className='error'>{errors.number.message}</div>}
      {errors.number &&  errors.number.type === 'pattern' && <div className='error'>{errors.number.message}</div>}
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
          <input type="number" id='month' className='monthinput'style={{ ...borderStyle, border: errors.month && 'solid red 2px' }}
            placeholder='MM' name='month' {...register('month', { required: true,
              onChange: monthOnchange, })}  />

          <input type="number" id='year' style={{ ...borderStyle, border: errors.year && 'solid red 2px' }}
            placeholder='YY' className='yearinput' name='year' {...register('year', { required: true, onChange: yearOnChange })}  />
          <input type="number" id='cvc' className='cvvinput' style={{ ...borderStyle, border: errors.cvc && 'solid red 2px' }}
            placeholder='e.g 123' name='cvc' {...register('cvc', {
              required: true,  onChange : cvvOnchange  })}
          />

          {errors.month && <div className='error-month' > can&apos;t be blank  </div>}
          {errors.year && <div className='error-year' style={{
            bottom: !errors.month && errors.year ? 0 : 60
          }}>  can&apos;t be blank</div>}
          {errors.cvc && <div className='error-cvv' style={{
            bottom: (!errors.month || !errors.year) && errors.cvv  ? 0 : 60
          }} > can&apos;t be blank </div>}
        </div>

      </div>


      <button type='submit'> Confirm</button>
    </FormStyle>

  );
};

export default Form;
