import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import BaseLayout from './components/Layout';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import MainLayout from './components/Main.js';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path='/main' component={MainLayout} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/' component={Home} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>,
document.getElementById('root'));
registerServiceWorker();
