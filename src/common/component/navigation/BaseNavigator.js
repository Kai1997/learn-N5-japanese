import React from 'react';
import { createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import Post from "../../../screens/home/home";
import Setting from "../../../screens/setting/Setting";
import Notify from "../../../screens/notification/notify";
import Test from '../../../components/test'
import Articles from '../../../components/Home1'
import Articles2 from '../../../components/Home2'
import Home3 from '../../../components/Home3'
import Lession from '../../../screens/detail/detailLession'
import HomeScreen from '../../../screens/account/HomeScreen';
import LoginScreen from '../../../screens/account/LoginScreen';
import RegisterScreen from '../../../screens/account/RegisterScreen';
import ForgotPasswordScreen from '../../../screens/account/ForgotPasswordScreen';
import Dashboard from '../../../screens/account/Dashboard';



const AppNav = createStackNavigator(
  {
    Home: {
      screen: Articles,
    },
    Article: {
      screen: Articles2,
    },
    Home3: {
      screen: Home3,
    },
    Lession: {
      screen: Lession,
    },
    Setting:{
      screen: Setting,
    },
    Post:{
      screen: Post,
    },
  }
);


// export default createAppContainer(BaseNavigator);
export default createAppContainer(AppNav);

