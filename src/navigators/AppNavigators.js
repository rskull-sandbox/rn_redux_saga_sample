// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  addNavigationHelpers,
  StackNavigator
} from 'react-navigation'

import Home from '../containers/Home'

export const AppNavigator = StackNavigator({
  Home: {
    screen: Home
  }
})

export class AppWithNavigationState extends Component<{}> {
  render () {
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav
})

export default connect(mapStateToProps)(AppWithNavigationState)
