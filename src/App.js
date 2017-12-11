// @flow
import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'

import configureSotre from './configureSotre'
import AppWithNavigationState from './navigators/AppNavigators'

export default class App extends Component<{}> {
  state = {
    store: {},
    isLoading: true
  }

  componentDidMount() {
    const initialState = {}

    this.setState({
      store: configureSotre(initialState),
      isLoading: false
    })
  }

  render() {
    if (this.state.isLoading) {
      return null
    }
    return (
      <Provider store={this.state.store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}
