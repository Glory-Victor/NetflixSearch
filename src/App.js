import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import SeriesContainer from './Components/Series/SeriesContainer';
import SeasonView from './Components/SeasonView';
import Unavailable from './Unavailable';

const App = () => {
  return (
    <main>
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/series" component={SeriesContainer} />
          <Route path="/season" component={SeasonView} />
          <Route path="/unavailable" component={Unavailable} />
      </Switch>
    </main>
  );
}

export default App;
