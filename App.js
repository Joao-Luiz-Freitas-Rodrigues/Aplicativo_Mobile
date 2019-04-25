import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers'
import ReduxThunk from 'redux-thunk';


import Route from './src/Route';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk ))}>
        <View style={css.view}>
          <Route />
        </View>
      </Provider>

    );
  }
}

const css = StyleSheet.create({
  view: {
    flex: 1,
    
  }

});