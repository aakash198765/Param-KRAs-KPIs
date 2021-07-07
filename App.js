/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import 'react-native-gesture-handler';
 import * as React from 'react';
 import {View, Text, Button, StyleSheet, Platform, SafeAreaView} from 'react-native';
 import LoginScreenStack from './Navigator/screensNavigator';

 
 
 export default function App() {   
   return ( 
    <SafeAreaView style={styles.container}>
     <LoginScreenStack />
    </SafeAreaView>
   );
 };
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
});
 
 