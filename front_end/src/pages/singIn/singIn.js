import React, { useState, useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import api from '../../services/api';
import { login } from '../../services/auth';
import Header from '../../components/header/header';
import Input from '../../components/input/input';
import loginIcon from '../../assets/icons/user.svg';
import './singIn.css';

function SingIn(props){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [errorMessageIsDisplay, setErrorMessageIsDisplay] = useState(false);

  useEffect(() => {
    if(errorMessageIsDisplay){
      setTimeout(() => {
        setErrorMessageIsDisplay(false);
      }, 4000);
    };
  }, [errorMessageIsDisplay])

  async function handleSingIn(e){
    e.preventDefault();
    if(!email || !password){
      setError({ message: 'Fill in all fields' });
      setErrorMessageIsDisplay(true);
    } else {
      try {
        const response = await api.post('/user/login', { email, password });
        console.log(response)
        login(response.data.token);
        props.history.push('/home');
      } catch (error) {
        setError({ message: error.response.data.error });
        setErrorMessageIsDisplay(true);
      }
    }
  }

  return(
    <Fragment>
      <Header buttonText='Register'/>
      <div className='form-div'>
      <form className='singIn-form' onSubmit={handleSingIn}>
        <div className='singIn-form__title'>
          <h1>LOGIN</h1>
          <div className='singIn-form__icon'>
            <img src={loginIcon}/>
          </div>
        </div>
        <div className='singIn-form__fields'>
          <Input 
            id='email' 
            text='Email' 
            onChange={e => setEmail(e.target.value)}
          />
          <Input 
            id='password' 
            text='Password' 
            type='password' 
            onChange={e => setPassword(e.target.value)}
          />
          <button className='singIng-form__submit' type='submit'>GO</button>
          <button className='singIn-form__forgot-password'>Forgor your password?</button>
        </div>
      </form>
      {errorMessageIsDisplay && <p className='singIn-form__error'>{error.message}</p>}
      </div>
    </Fragment>
  )
}

export default withRouter(SingIn);