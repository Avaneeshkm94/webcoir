import React, { Component } from 'react';
import { View, Text ,StyleSheet,TextInput} from 'react-native';
import {Header, LearnMoreLinks,Colors, DebugInstructions,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import Banner1  from './Banner1';
import Phone  from './Phone';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}> 
           <View style={styles.logoContainer}>
              <Banner1/>
           </View>
           <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle1}>
                  Hello there!!
              </Text>
              <Text style={styles.sectionTitle2}>
                  Welcome
              </Text>
              <Text style={styles.sectionDescription}>
               Signin to continue with your mobile number
              </Text>
           </View>
          <View style={styles.sectionContainer}>
             <Phone/>
          </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
     flex: 1,
     justifyContent: 'center',
  },
  logoContainer:{
    flex: 1,
     justifyContent: 'center',
     alignItems:'center',
  },
  sectionContainer: {
   // marginTop: 32,
    paddingHorizontal: 30,
  //  paddingLeft: '20px',
  },
  sectionTitle1: {
    fontSize: 24,
    fontWeight: '600',
    color: '#f40606',
    fontFamily:'Mahalia W00 Regular',
  },
  sectionTitle2: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    fontFamily:'Mahalia W00 Regular',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
    fontFamily:'Mahalia W00 Regular',
  },

});