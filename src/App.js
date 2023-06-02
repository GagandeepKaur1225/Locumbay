import 'react-native-gesture-handler';
import './translations';

import { persistor, store } from './store';

import ApplicationNavigator from './navigators/Application';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import React from 'react';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ApplicationNavigator />
    </PersistGate>
  </Provider>
);
export default App;
