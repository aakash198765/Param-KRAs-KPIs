import React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
//
import { HeaderBackButton } from '@react-navigation/stack';

 export default function Profile(props) { 
  const { navigation } = props;
   navigation.setOptions({
      headerLeft: () => (<HeaderBackButton {...props} onPress={()=>navigation.goBack()} />),
      headerStyle: {
        backgroundColor: '#5ead97',
      }
   });
  

    return ( 
      <View style={style.container}>

        <View style={style.cardView}> 
          <View style={style.imageContainer}>
              <Image source={ require('apppp/assets/black.jpeg') } fadeDuration={20} style={style.imageStyle} />
          </View>
          <View style={style.profileContainer}>
              <Text style={style.nameText}>Aakash Kumar</Text>
              <Text style={style.profileText}>Application Developer</Text>
          </View> 
 
          <View style={style.line}><View style={style.orange}></View><View style={style.green}></View><View style={style.red}></View></View>
          <View style={style.box} > 
            <View style={style.idContainer}><Text style={style.idDate}>Employee Id</Text><Text style={style.idDateValue}>#_90369</Text></View>
            <View style={style.dateContainer}><Text style={style.idDate}>Start Date</Text><Text style={style.idDateValue}>24th May, 2021</Text></View>
          </View>
        </View>

      </View>
    );
  }
  

  const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
     
      backgroundColor: '#178282'
    },
    cardView: { 
      elevation: 20,
      height: '80%',
      width: '90%',
      backgroundColor: '#1fadad',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#1fadad',
      marginVertical: 15,
      marginHorizontal: 10,
      padding: 30
  },
  imageContainer: {
    backgroundColor: '#393960',
    alignItems: 'center',
    height: 110,
    borderRadius: 10,
  },
  imageStyle: {
    width: 150,
    height: 150,
    borderColor: '#8080b3',
    borderWidth: 3,
    borderRadius: 75,
    marginTop: 10,   
  },
  profileContainer: {
     flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: '25%',
  },
  nameText:{
    color: 'white',
    fontSize: 20
  },
  profileText:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  line:{
    flexDirection: 'row',
    height: 4,
    marginVertical: 10,
  },
  orange:{
    flex: 1,
    backgroundColor: '#ff6900',
  },
  green:{
    flex: 1,
    backgroundColor: '#393960',
  },
  red:{
    flex: 1,
    backgroundColor: '#ff697f',
  },
  box:{
    flexDirection: 'row',
    width: '100%',
    height: 70,
    alignItems: 'center',
  },
  idContainer:{
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent:'center',
    borderRightWidth: 2,
  },
  dateContainer:{
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  idDate:{
    color: 'white',
    marginVertical: 10,
  },
  idDateValue:{
    color: '#393960',
    fontWeight: 'bold',
    fontSize: 15
  }
  });