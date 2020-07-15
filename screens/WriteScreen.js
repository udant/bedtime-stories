import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class WriteScreen extends React.Component  {
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
    render(){
        return(
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <Text>
                    Write A Story
                </Text>
                 <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {}}
          multiline={true}
        />
         <Button title="submit story" onPress={() => {
           console.log("pressed");
            }}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({

  inputBox: {
    marginTop: 10,
    width: '90%',
    alignSelf: 'center',
    height: 389,
    textAlign: 'center',
    borderWidth: 4,
  },
});