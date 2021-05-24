import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import DrawerRouterContainer from './DrawerRouterContainer';
import DataGrid from './DataGrid';
import VaccineLocations from './VaccineLocations';
import CovidChat from './CovidChat';
import MapView from './MapView';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <DrawerRouterContainer>
        <Switch>
          <Route exact={true} path="/" component={DataGrid} />
          <Route exact={true} path="/locations" component={VaccineLocations} />
          <Route exact={true} path="/chat" component={CovidChat} />
          <Route exact={true} path="/map" component={MapView} />
        </Switch>
      </DrawerRouterContainer>
    </HashRouter>

  </React.StrictMode>,
  document.getElementById('root')
);
