import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import React from 'react'
import { loginRoutes, publicRoutes } from './routes';
import Header from './Component/Header/Header';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { login } from './redux/AuthSlice';
import axios from 'axios';
import { add_ticket } from './redux/TicketSlice';

function App() {
  let auth = useSelector(state => state.auth.is_login)
  let auth_ticket = useSelector(state => state.ticket.ticket)
  let dispatch = useDispatch()

  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      axios.get('http://127.0.0.2:8000/dj-rest-auth/user/', {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}}).then(data => {
        dispatch(login());
        axios.get('http://127.0.0.2:8000/api/gim/check_user/', {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}}).then(data => {
          dispatch(add_ticket(data.data));
        })
      })
    }
    axios.post('http://127.0.0.2:8000/dj-rest-auth/token/verify/', {token: localStorage.getItem('token')})
  }, [])

  return (
    <BrowserRouter>
      <div className="container">
        <Header auth={auth}/>
        {auth === false ? 
          <Switch>
            {publicRoutes.map(item => {
              return <Route key={item.path} path={item.path} exact={item.exact || false} render={() => <item.component />} />
            })}
          </Switch>
          :
          <Switch>
            {loginRoutes.map(item => {
              return <Route key={item.path} path={item.path} exact={item.exact || false} render={() => <item.component auth_ticket={auth_ticket} />} />
            })}
          </Switch>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
