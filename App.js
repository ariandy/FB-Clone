import React, {Component} from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from './LoginScreen'
import FeedsScreen from './FeedsScreen'

class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const AppNavigator = createStackNavigator({
  Login: LoginScreen,
  Feeds: FeedsScreen,
});

const AppContainer = createAppContainer(AppNavigator)
export default App