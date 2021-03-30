import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import BoardsPage from './container/BoardsPage';
import AuthForm from './components/AuthForm/AuthForm';
import {useSelector} from 'react-redux';

const App = () => {
  const user = useSelector(state => state.user.user?.username);
  if (user) {
    return (
      <Switch>
        <Route exact path="/" component={BoardsPage}/>
      </Switch>
    );
  }
  return (
    <Switch>
      <Route exact path="/auth" component={AuthForm}/>
      <Redirect to="/auth"/>
    </Switch>
  );
};

export default App;
