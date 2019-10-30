import React from 'react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { getId } from './reducers/users'
import User from './component/user';
import AddUser from './component/adduser';
import { Home } from './component/home';
import login from './component/authication/login';
import callback from './component/authication/callback';
import Dashbord from './component/dashbordAPI/dashbord';
import { adduser, activeUser, edituser } from './actions';
import { AuthProvider } from './auth';
import { fetchDataPopular } from './actions/fetch';
import { PrivateRoute } from './component/authication/privateRoute';
import { connect } from 'react-redux';
import NewblankApi from './component/dashbordAPI/NewblankApi';

let App = (props) => {
  // console.log(props)
  const { adduser, allUser, activeuser, fetchPopular, editUser, activeUser } = props;

  const WrapedHome = () => {
    return <Home allUser={allUser} editUser={editUser} />
  }
  const WrapedAddUser = () => {
    return <AddUser adduser={adduser} />
  }
  const WrapedDashbord = () => {
    return <Dashbord activeuser={activeuser} getId={getId} fetchPopular={fetchPopular} />
  }
  const WrapedNewblankApi = (p) => {
    return <NewblankApi allUser={allUser} activeuser={activeuser} {...p} />
  }
  console.log(allUser)
  return (
    <AuthProvider>
      <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
        <div className="container flex">
          <NavLink className="navbar-brand" to="/home">my App</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/home">Home</NavLink>
              </li>
              <li className="nav-item">
                {
                  // console.log(activeuser),
                  Object.keys(activeuser).length === 0 ?
                    null
                    :
                    <NavLink className="nav-link user" to="/dashbord">Dashbord</NavLink>

                }

              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                {Object.keys(allUser).length === 0 ?
                  null
                  :
                  <NavLink className="nav-link" to="/home"><User allUser={allUser} activeUser={activeUser} /></NavLink>
                }
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Switch>
        <PrivateRoute exact path="/home" component={WrapedHome} />
        <Route path="/login" component={login} />
        <Route path="/callback" component={callback} />
        <PrivateRoute path="/user" component={WrapedAddUser} />
        <PrivateRoute path="/dashbord" component={WrapedDashbord} />
        <PrivateRoute path="/newblank/:id" component={WrapedNewblankApi} />
        <Redirect to="/home" />
      </Switch >
    </AuthProvider>
  );
}

const MapStateToProps = (state) => {
  return {
    allUser: state.users,
    activeuser: state.userA,
    fetchPop: state.users.listAPI
  }
}
const MathDispatchToProps = (dispatch) => {
  return {
    adduser: (name, lastname, adbout) => dispatch(adduser(name, lastname, adbout)),
    activeUser: (user) => dispatch(activeUser(user)),
    fetchPopular: (url, id) => dispatch(fetchDataPopular(url, id)),
    editUser: (user) => dispatch(edituser(user))

  }
}

App = connect(
  MapStateToProps,
  MathDispatchToProps
)(App);



export default App;
