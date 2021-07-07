import React from 'react';
 import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
 import { Icon } from 'react-native-vector-icons/FontAwesome';

 //
 

 export default function Welocme(props) {
    return (
      <View style={style.container}>
        <Text>Welcome Screen</Text> 

        <TouchableOpacity onPress={()=>{props.navigation.navigate('login')}} style={style.buttonContainer}  >
          <View style={style.button}>
          <Text style={style.buttonText}>Sign In</Text>      
          </View>
        </TouchableOpacity>
        
       
      </View>
    );
  }
  

  const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer: {
      
    },
    button: {
      marginVertical: 60,  
      width: 240,  
      alignItems: 'center',  
      backgroundColor: '#5ead97',
      borderRadius: 80
       
    },
    buttonText: {
      padding: 20,  
      color: 'white',  
      fontSize: 18,
    },
  });