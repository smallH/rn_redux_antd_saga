import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './store';

import RootNavigator from './routes/RootNavigator';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}
