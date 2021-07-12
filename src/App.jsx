import { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';

import history from '@/store/history';
import routePaths from '@/constants/routePaths';


const App = () => (
  <Router history={history}>
      <Suspense fallback={"Loading..."}>
        <Switch>
          {routePaths.map((props, index) => (
            <Route key={index} {...props} />
          ))}
        </Switch>
      </Suspense>
  </Router>
);

export default App;
