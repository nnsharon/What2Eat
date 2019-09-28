import React from 'react';
import {createDrawerNavigator, createStackNavigator, DrawerItems,} from 'react-navigation';
import 'firebase/firestore';
import {
  Image,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import HistoryScreen from '../scenes/HistoryScreen';
import Profile from '../scenes/Profile';
import MainPage from '../scenes/MainPage';
import SearchDisplayPage from '../scenes/SearchDisplayPage';
import ChooseFavorite from '../scenes/ChooseFavorite';
import {Icon} from "native-base";
import YelpSearchRequest from "./YelpSearchRequest";
import Logout from '../scenes/Logout';
import GroupPage from '../scenes/GroupPage';
import GroupDetail from "../scenes/GroupDetail";

const CustomDrawComponent = (props) => (
  <SafeAreaView style={{flex: 1, backgroundColor: '#7174BF'}}>
    <View style={{height: 150, backgroundColor: '#7174BF', alignItems: 'center', justifyContent: 'center'}}>
      <Image source={require('./w2e_logo.png')} style={{height: 130, width: 130, borderRadius: 0}}/>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)

//main stack navigator of the app
//TODO: separate them into different stack navigator from their function
export const AppStackNavigator = createStackNavigator({
  MainPage: MainPage,
  SearchDisplayPage: SearchDisplayPage,
  ChooseFavorite: ChooseFavorite,
  YelpSearchRequest: YelpSearchRequest,
}, {
  initialPage: 'MainPage',
  headerMode: 'none',
  navigationOptions: {header: {visible: false}} // ADDED THIS
});

//stack navigator handle group feature
export const GroupStackNavigator = createStackNavigator({
  Group: GroupPage,
  GroupDetail: GroupDetail,
}, {
  initialPage: 'GroupPage',
  headerMode: 'none',
  navigationOptions: {header: {visible: false}} // ADDED THIS
});

//main menu drawer navigator
export const AppDrawerNavigator = createDrawerNavigator({
  MainPage: {
    screen: AppStackNavigator,
    navigationOptions: {
      drawerIcon: ({tintColor}) => (
        <Icon name={'md-home'} style={{fontSize: 24, color: 'white'}}/>
      )
    }
  },
  Profile: Profile,
  History: HistoryScreen,
  Group: {
    screen: GroupStackNavigator,
  },
  Logout: Logout,
}, {
  contentComponent: CustomDrawComponent,
  contentOptions: {
    activeBackgroundColor: '#585d91',


    labelStyle: {
      color: 'white',
    },
  }
});

