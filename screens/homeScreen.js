import React from 'react';
 import {View, Text, Button, StyleSheet} from 'react-native';

 export default function HomeScreen({navigation}) {
    return (
      <View style={style.container}>
        <Text>Home Screen</Text>
        <Button
          title="Go to details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }
  

  const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });