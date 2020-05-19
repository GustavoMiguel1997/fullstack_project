import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../services/auth';
import SingIn from '../pages/singIn/singIn';
import SingUp from '../pages/singUp/singUp';

function PrivateRoute({ component: Component, ...rest }){
  return(
    <Route {...rest} render={props => 
      isAuthenticated() 
        ? <Component {...props}/>
        : <Redirect to={{ pathname: '/login', state: { from: props.location }, error: 'User not authenticated'}}/>
    }/>
  )
}

function RedirectRoute({...rest }){
  return(
    <Route {...rest} render={() =>
      <Redirect to='/login'/>
    }/>
  )
}

function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <RedirectRoute exact path='/'/>
        <Route path="/login" component={SingIn}/>
        <Route path="/register" component={SingUp}/>
        <PrivateRoute path="/home" component={() => <h1>Login</h1>}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;