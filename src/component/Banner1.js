import React, { Component } from 'react';
import { View, Text,StyleSheet ,Image} from 'react-native';

export default class Banner1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={styles.container}>
        <Image source={require('../../assets/banner1.png')} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
      // flex:1,
      // justifyContent:'center',
    }
});
