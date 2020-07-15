import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ReadScreen from './screens/ReadScreen';
import WriteScreen from './screens/WriteScreen';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      displaytext: '',
      definition: '',
      word: '',
      lexicalCategory: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {}}
          multiline={true}
        />
        <Button title="submit story" />
      </View>
    );
  }
}
const TabNavigator = createBottomTabNavigator({
  Read:{screen:ReadScreen},
  Write:{screen:WriteScreen},
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  /* container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },*/
  inputBox: {
    marginTop: 10,
    width: '90%',
    alignSelf: 'center',
    height: 389,
    textAlign: 'center',
    borderWidth: 4,
  },
});
