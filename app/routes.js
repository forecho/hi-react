/* 
* @Author: forecho
* @Date:   2015-12-19 09:55:30
* @Last Modified by:   forecho
* @Last Modified time: 2015-12-19 11:10:06
*/
import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
  </Route>
);