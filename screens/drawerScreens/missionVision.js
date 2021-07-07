 import React from 'react';
 import {View, Text, Button, StyleSheet, ScrollView, Image, ImageBackground, TouchableOpacity} from 'react-native';
//
import { HeaderBackButton } from '@react-navigation/stack';

 export default function MissionVision(props) { 
  const { navigation } = props;
  navigation.setOptions({
     headerLeft: () => (<HeaderBackButton {...props}  onPress={()=>navigation.goBack()} />),
     headerStyle: {
      backgroundColor: '#5ead97',
    }
     
  });
    
  const backgroundImage = { uri: "https://www.unidine.com/wp-content/uploads/2019/08/iStock-1071731138-630x420.jpg" };

    return (
        <View style={style.container} >
          <Image source={backgroundImage} style={style.backgroundImage} /> 
          <View style={style.buttonContainer}>
            <TouchableOpacity style={style.button} activeOpacity={0.6} >
                <Text style={{color: 'white', fontWeight: 'bold' }}>Mission</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.button} activeOpacity={0.6}  >
                <Text style={{color: 'white', fontWeight: 'bold' }}>Vision</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.button} activeOpacity={0.6}  >
                <Text style={{color: 'white', fontWeight: 'bold' }}>Values</Text>
            </TouchableOpacity>      
          </View> 
          
          <View style={style.contentContainer}>

          </View>
      </View>
    );
  }
  

  const style = StyleSheet.create({
   container: {
      flex: 1,
      
   },
    backgroundImage: { 
      width: '100%',
      height: '50%',
    },
    buttonContainer: {
        flexDirection: 'row',
        height: '12%',
        justifyContent: 'space-evenly',
        paddingVertical: 20,
        backgroundColor: '#178282',   
    }, 
    button: {
      width: '30%',
      height: '100%',
      alignItems: "center",
      justifyContent: 'center',
      backgroundColor: '#041616',
      borderRadius: 20,
    },
    contentContainer: {
        width: '100%',
        height: '60%',
        backgroundColor: '#1fadad',
    },
  });