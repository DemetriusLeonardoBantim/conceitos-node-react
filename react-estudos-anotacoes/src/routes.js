import { Switch, Route } from 'react-router-dom';

import Login from './login';
import Store from './store';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/store" component={Store} />
    </Switch>
  );
};

export default Routes;
