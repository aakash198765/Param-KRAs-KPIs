 import React from 'react';
 import {View, Text, Button, StyleSheet, ImageBackground , Image, ScrollView} from 'react-native';
//
import { HeaderBackButton } from '@react-navigation/stack';

 export default function Department(props) {  

  const { navigation } = props;
   navigation.setOptions({
      headerLeft: () => (<HeaderBackButton {...props} onPress={()=>navigation.goBack()} />),
      headerStyle: {
        backgroundColor: '#5ead97',
      }
   });

  const backgroundImage = { uri: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX32297415.jpg" };
  const image = {uri: "https://www.pixel4k.com/wp-content/uploads/2019/06/bitcoin-monk_1560535379.jpg" };
  const supervisorImage ={ uri: "https://www.pngkit.com/png/detail/106-1062969_sales-guy-formal-wear.png"} ; 
  const name = "Anand Rathi";
  const profile ="Project Manager"; 

  return (
      <ScrollView style={style.container}> 
        <ImageBackground source={backgroundImage} style={style.backgroundImage}> 
        <Text style={style.departmentText}>BLOCKCHAIN  DEPARTMENT</Text>
        <View style={style.card}>
              <Image source={image} fadeDuration={20} style={style.imageStyle} />
        </View> 
        
        <Text style={style.departmentText}>DEPARTMENT  SUPERVISOR</Text> 
        <View style={style.card}>
           <View style={style.imageContainer}>
              <Image source={ supervisorImage } fadeDuration={20} style={style.supervisorImageStyle} />
              <Text style={style.nameText}>{name}</Text>
              <Text style={style.profileText}>{profile}</Text>
           </View>
        </View> 
        
        
        </ImageBackground>
      </ScrollView>
    );
  }
  

  const style = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      
    },
    backgroundImage: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      
    },
    departmentText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginVertical: 5,
        marginTop: 10,

    },
    card: {
     flex: 1,
     padding: 5,

    },
    imageStyle: {
      width: '100%',
      height: 300,
      //borderColor: '#8080b3',
      borderWidth: 3,
      borderRadius: 10,
      marginTop: 10,  
    },
    imageContainer: {
      alignItems: 'center',
      height: 300,
      backgroundColor: '#fff2e6',
      borderRadius: 10,
      marginVertical: 10,
    },
    supervisorImageStyle: {
      width: 150,
      height: 150,
      borderColor: '#ff6900',
      borderWidth: 3,
      borderRadius: 75,
      marginVertical: 20,   
    },
   nameText:{
     color: 'black',
     fontSize: 20
   },
   profileText:{
     color: 'black',
     fontSize: 20,
     fontWeight: 'bold'
   },
  
  });