import React from 'react';
import { Switch, BrowserRouter, Route, } from 'react-router-dom'
import 'antd/dist/antd.css';
import './App.css';
import Home from './containers/Home/Home'
import Register from './containers/Register/Register'
import Login from './containers/Login/Login'
import Users from './containers/Users/Users'
import Appointments from './containers/Appointments/Appointments'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'



function App() {
  return (

    <BrowserRouter>
      <Route>
        <Header/>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/register' component={Register} exact />
          <Route path='/login' component={Login} exact />
          <Route path='/users' component={Users} exact />
          <Route path='/appointments' component={Appointments} exact />
        </Switch>
        <Footer/>
        </Route>
    </BrowserRouter>
  );
}

export default App;
