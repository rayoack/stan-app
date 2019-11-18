import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Movies from './pages/Movies';
import Series from './pages/Series';

export default function Routes() {
  return (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/series" component={Series} />
    </Switch>
  );
}
