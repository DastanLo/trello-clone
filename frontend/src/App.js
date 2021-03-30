import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import BoardsPage from './container/BoardsPage';
import AuthForm from './components/AuthForm/AuthForm';
import {useSelector} from 'react-redux';
import Layout from './components/Layout/Layout';

const App = () => {
  const user = useSelector(state => state.user.user?.username);
  if (user) {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={BoardsPage}/>
        </Switch>
      </Layout>
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

