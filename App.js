import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ReadScreen from './screens/ReadScreen'
import WriteScreen from './screens/WriteScreen'
import Icon from 'react-native-vector-icons/FontAwesome'
import AppHeader from './screens/AppHeader'

export default function App() {
  return (
    <View style={styles.container}>
                <AppHeader />
            </View>,
    <AppContainer />

  );
}
const readIcon = ({ tintColor }) => (
  <Icon name='comments' size={30} color={tintColor} />
)


const profileIcon = ({ tintColor }) => (
  <Icon name='user' size={25} color={tintColor} />
)

const TabNavigator = createBottomTabNavigator({
  Read:{screen:ReadScreen,
    defaultnavigationOptions: {
      tabBarIcon: readIcon
    }
  },
  Write:{screen:WriteScreen,
    defaultnavigationOptions: {
      tabBarIcon: profileIcon
    }
  
  }
 /* defaultNavigationOptions :{
        //Function 
        header: ({scene, previous, navigation}) => {
          console.debug("scene: ", scene)
      }

  }
  */
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
/* defaultNavigationOptions: {
      title: "title",
      header: ({scene, previous, navigation}) => {
          console.debug("scene: ", scene)
      },*/