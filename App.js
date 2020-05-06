import React from "react";
import { Platform, StatusBar } from "react-native";
import store from "./src/store/store";
import { Provider } from "react-redux";
import BaseNavigator from "./src/common/component/navigation/BaseNavigator";
import {
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";

export default class App extends React.Component {

  render() {
      return (
        <Provider store={store}>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          <BaseNavigator />
        </Provider>
      );
    
  }
}
