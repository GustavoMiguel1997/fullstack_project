import React, { useState, useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import api from '../../services/api';
import { login } from '../../services/auth';
import Header from '../../components/header/header';
import Input from '../../components/input/input';
import singUpIcon from '../../assets/icons/pencil.svg';
import './singUp.css';

function SingUp(){
  const [name, setName] = useState('');
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
  
  async function handleSingUp(e){
    e.preventDefault();
    if(!name || !email || !password){
      setError({ message: 'Fill in all fields' });
      setErrorMessageIsDisplay(true);
    } else {
      try {
        const response = await api.post('/user/register', { name, email, password });
        login(response.data.token);
        props.history.push('/home');
      } catch (error) {
        console.log(error);
        setError({ message: 'Error ao fazer login' });
        setErrorMessageIsDisplay(true);
      }
    }
  }

  return(
    <Fragment>
      <Header buttonText='Login'/>
      <div className='form-div'>
      <form className='singIn-form' onSubmit={handleSingUp}>
        <div className='singIn-form__title'>
          <h1>Register</h1>
          <div className='singIn-form__icon'>
            <img src={singUpIcon}/>
          </div>
        </div>
        <div className='singIn-form__fields'>
        <Input 
            id='name' 
            text='Name' 
            onChange={e => setName(e.target.value)}
          />
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
        </div>
      </form>
      {errorMessageIsDisplay && <p className='singIn-form__error'>{error.message}</p>}
      </div>
    </Fragment>
  )
}

export default withRouter(SingUp);