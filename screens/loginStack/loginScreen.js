import React from 'react';
import {View, Text, Button, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
//
import Icon from 'react-native-vector-icons/FontAwesome';

 export default function Login(props) { 
   const myIcon = <Icon name="rocket" size={30} color="#900" />;
    return (
      <View style={style.container}>
        
        <View style={style.cardView}> 
          {myIcon}
          <View style={style.textInput}><TextInput placeholder='Email Address' /></View>
          <View style={style.textInput}><TextInput placeholder='Password' /></View> 
          <TouchableOpacity onPress={()=>{props.navigation.navigate('drawerNavigator')}} style={style.buttonContainer}  >
          <View style={style.button}>
          <Text style={style.buttonText}>Sign In</Text>      
          </View>
        </TouchableOpacity>
        <Text style={style.forgot}>Forgot Password?</Text>
        </View>
      </View>
    );
  }
  

  const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardView: { 
        elevation: 2,
        height: '50%',
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 30,
        borderWidth: 5,
        borderColor: 'white',
        marginHorizontal: 10,
        padding: 40
    },
    textInput: {
      backgroundColor: 'white',
      marginVertical: 10,
      width: '100%',
      height: '20%',
      paddingHorizontal: '5%',
      borderRadius: 10,
      borderWidth: 1,
    },
    button: {
      marginVertical: 20,
      marginHorizontal: 32,  
      width: 200,
      height: 50,  
      alignItems: 'center',  
      justifyContent: 'center',
      backgroundColor: '#5ead97',
      borderRadius: 60    
    },
    buttonText: {
      padding: 10,  
      color: 'white',  
      fontSize: 18,

    },
    forgot: {
      alignSelf: 'center',
    }
  });