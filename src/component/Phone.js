import React, { Component } from 'react';
import { View, Text ,TextInput,StyleSheet, TouchableOpacity,
  Button,
  Alert,} from 'react-native';

export default class Phone extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <TextInput style={styles.inputNumber}
          placeholder="Enter your mobile number"
          placeholderTextColor="red"
          placeholderStyle={styles.placeholderStyle}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <TouchableOpacity style={styles.nextBtn} onPress={() => Alert.alert('Button with adjusted color pressed')}>
           <Text style={styles.sectionTitle}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    // flex:1,
    // justifyContent:'center',
  },
  inputNumber:{
     height:40,
     width:350,
    // backgroundColor:'rgb(255,255,255,.5)',
     fontSize:15,
     fontFamily:'Mahalia W00 Regular',
     borderColor: 'red',
     borderRadius: 10,
     borderWidth: 1,
     alignItems:'center',
     justifyContent:'center',
     paddingHorizontal: 10, 
  },
  nextBtn:{
    alignItems: 'center',
    backgroundColor: '#ff2121',
   // padding: 10,
    width:350,
    marginTop:15,
    borderRadius: 10,
    borderWidth: 1,  
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '200',
    color: 'white',
    fontFamily:'Mahalia W00 Regular',
  },
});
