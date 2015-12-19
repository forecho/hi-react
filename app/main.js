/* 
* @Author: forecho
* @Date:   2015-12-19 09:55:36
* @Last Modified by:   forecho
* @Last Modified time: 2015-12-19 11:10:10
*/
import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes';

let history = createBrowserHistory();

ReactDOM.render(<Router history={history}>{routes}</Router>, document.getElementById('app'));