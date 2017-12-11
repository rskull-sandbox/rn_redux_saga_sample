import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

export class Home extends Component {
  render () {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  // something
})

export default connect(mapStateToProps)(Home)
