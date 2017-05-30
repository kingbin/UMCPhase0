'use strict'
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AlertIOS,
  TouchableHighlight,
  NavigatorIOS,
  requireNativeComponent
} from 'react-native';

const MyMap = requireNativeComponent('RCTMap');

let nextIndex = 0

/**/
export default class Phase0 extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          title: 'My Initial Scene',
          component: MyScene,
          passProps: { title: 'foo' }
        }}
        style={{flex: 1}}
      />
    );
  }
}

/**/
let FormattedDate = (props) => {
  return <h2>It is {props.date.toLocaleTimeString()}</h2>
}
/**/
/*
function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}
*/
class MyScene extends Component {
  constructor(props) {
    super(props);
    this.state = {nextIndex: 0,
                  date: new Date()};
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  _onForward = () => {
    let i = this.state.nextIndex+1
    this.setState({
      nextIndex: i
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Current Scene: { this.props.title }
        </Text>
        <Text>It Is: {this.state.date.toLocaleTimeString()}</Text>
        <TouchableHighlight onPress={this._onForward}>
          <Text>Current Scene {this.state.nextIndex}</Text>
        </TouchableHighlight>
        <MyMap style={styles.nativeView} />
      </View>
    )
  }
}

/**/
const styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  nativeView: {
    height: 300,
    width: 300
  },
});

/*
var { requireNativeComponent } = require('react-native');

// requireNativeComponent automatically resolves this to "RCTMapManager"
//module.exports = requireNativeComponent('RCTMap', null);
var Phase0 = requireNativeComponent('RCTMap', null);
*/

AppRegistry.registerComponent('Phase0', () => Phase0);
