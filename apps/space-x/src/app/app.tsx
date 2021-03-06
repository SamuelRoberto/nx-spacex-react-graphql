import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { RouterPathEnum } from './shared/enums/RouterPathEnum';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { environment } from '../environments/environment'
import { Provider } from 'react-redux';

/**
 * Containers
 */
import HomeContainer from './home/containers/Home.container'
import DragonsListContainer from './dragons/containers/DragonsList.container';
import RocketsListContainer from './rockets/containers/RocketsList.container';
import DragonDetailContainer from './dragons/containers/DragonDetail.container';
import RocketDetailContainer from './rockets/containers/RocketDetail.container';

/**
 * Components
 */
import HeaderComponent from './shared/components/Header.component';
import LoaderComponent from './shared/components/Loader.component';
import ErrorComponent from './shared/components/Error.component';

/**
 * Store
 */
import store from './store';

const client = new ApolloClient({
  uri: environment.gqlBasePath
});

export const App = () => {

  return (
    <>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <Router>
            <LoaderComponent />
            <HeaderComponent />
            <ErrorComponent />
            <Switch>
              <Route path={RouterPathEnum.HOME} exact component={HomeContainer} />
              <Route path={RouterPathEnum.ROCKETS} component={RocketsListContainer} />
              <Route path={RouterPathEnum.ROCKET} component={RocketDetailContainer} />
              <Route path={RouterPathEnum.DRAGONS} component={DragonsListContainer} />
              <Route path={RouterPathEnum.DRAGON} component={DragonDetailContainer} />
              <Redirect to={RouterPathEnum.HOME} />
            </Switch>
          </Router>
        </ApolloProvider>
      </Provider >
    </>
  );
};

export default App;
