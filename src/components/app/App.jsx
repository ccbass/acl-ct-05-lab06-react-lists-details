import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import CharDetailContainer from '../../containers/CharDetailContainer';

import CharListContainer from '../../containers/CharListContainer';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Avatar API Viewer</h1>
        <Link to={'/'}>Home</Link>
        <Switch>
          <Route exact path="/" component={CharListContainer} />
          <Route path="/:id">
            <CharDetailContainer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}







