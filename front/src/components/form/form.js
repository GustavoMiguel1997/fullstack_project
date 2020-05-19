import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../input/input';
import loginIcon from '../../assets/icons/user.svg';
import registerIcon from '../../assets/icons/pencil.svg';
import './form.css';

function Form({ isRegister, onSubmit, messageError }){
  return(
    <div>
      <form className='home-form' action='/'>
        <div className='home-form__title'>
          <h1>
            {!isRegister ? <span>LOGIN</span> : <span>REGISTER</span>}
          </h1>
          <div className='home-form__icon'>
            <img src={isRegister ? registerIcon : loginIcon}/>
          </div>
        </div>
        <div className='home-form__fields'>
          {isRegister && <Input id='name' text='Name'/>}
          <Input id='email' text='Email' />
          <Input id='password' text='Password' type='password'/>
          <Link to='/home' onClick={onSubmit}>GO</Link>
          {
            !isRegister && 
            <button className='home-form__forgot-password'>Forgor your password?</button>
          }
        </div>
      </form>
          {console.log(messageError)}
        { messageError && <h4>{messageError}</h4>}
    </div>
  )
}

export default Form;