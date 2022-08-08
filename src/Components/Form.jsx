
import React from 'react';
import { FormStyle } from './styles/Form.style';
const Form = ({ handleSubmit, onSubmit, register,errors ,cardNameOnChange,
  cardNumberOnChange, cvvOnchange, monthOnchange, yearOnChange }) => {
  // const [error] = useState(
  //   errors.name ? true : false
  // );



  console.log(errors.name);

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

      <input className='nameinput' placeholder='e.g. Ademola Ogunmokun'
        name='name'  type= 'text'  {...register('name', {
          required: true,
          minLength: 4,
          onChange : cardNameOnChange })}/>
      {errors.name && <div className='error'>This field is required with first name and last name</div>}
      </div>
      <div><label className='numberlabel' htmlFor="number">
        <strong>
        CARD NUMBER

        </strong>

      </label>
      <input placeholder='e.g. 123456789012' className='numberinput'
        name='number'   type= 'number'  {...register('number', { required: true, max: 16,
          onChange : cardNumberOnChange } )}/>
      {errors.name && <div className='error'>This field is required with 16 digits</div>}
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

        <div>
          <input type="number" className='monthinput'
            placeholder='MM' name='month' {...register('month', { required: true, max: 2, maxLength:2,
              onChange: monthOnchange })}  />
          <input type="number"
            placeholder='YY' className='yearinput' name='year' {...register('year', { required: true, max: 2, maxLength:2, onChange: yearOnChange })}  />
          <input type="number" className='cvvinput'
            placeholder='e.g 123' name='cvc' {...register('cvc', {
              required: true, max: 2, maxLength:2, onChange : cvvOnchange  })}
          />


        </div>

      </div>


      <button type='submit'> Confirm</button>
    </FormStyle>

  );
};

export default Form;
