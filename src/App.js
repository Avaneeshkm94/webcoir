import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';


import SplashScreen from '../src/screens/SplashScreen';
import LoginForm from './component/LoginForm';
import Articles from './component/Articles';

//const Stack = createStackNavigator();

export default class  App extends Component {

  constructor(props) {
    super(props);
  
   // this.state = { isLoading: false }
  }
  state={
    loggedIn:true
  }
  renderContent = () =>{
    switch(this.state.loggedIn){
      case true:
        return <LoginForm />
      case false:
        return <Articles />
       
    }
  }
  render(){
    if (this.state.isLoading) {
      return <SplashScreen />;
    }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          
          <View style={styles.body}>
            {/* <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Status bar !</Text>
             
            </View>  */}
            <View style={styles.container}>
              {this.renderContent()}
             
            </View> 
          </View>
          
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
}
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  container :{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
});

//export default App;
