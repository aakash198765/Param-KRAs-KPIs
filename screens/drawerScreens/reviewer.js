 import React,{useState} from 'react';
 import {View, Text, Button, StyleSheet, Image, TouchableOpacity} from 'react-native';
 //
 //
import { HeaderBackButton } from '@react-navigation/stack';

 export default function Reviewer(props) {  
  const { navigation } = props;
  navigation.setOptions({
     headerLeft: () => (<HeaderBackButton {...props} onPress={()=>navigation.goBack()} />),
     headerStyle: {
       backgroundColor: '#5ead97',
     }
  });

// const variables 
  const supervisorImage ={ uri: "https://www.pngkit.com/png/detail/106-1062969_sales-guy-formal-wear.png"} ; 
  const reviewerName = "Anand Rathi";
  const reviewerProfile ="Project Manager";
  const con ="This section is going to contain Last Revised Date and Last Revised Content and on clicking see revised a modal will pop-up.";
  const [lastRevisedContent,setLastRevisedContent]=useState("");
  
// function
  const showLastRevised=()=>{
    setLastRevisedContent(con);
  };
  

    return ( 
      
      <View style={style.container}>
          <View style={style.imageContainer}>
              <Image source={ supervisorImage } fadeDuration={20} style={style.supervisorImageStyle} />
              <Text style={style.nameText}>{reviewerName}</Text>
              <Text style={style.profileText}>{ reviewerProfile}</Text>
          </View> 

          <View style={style.reviewContent}> 
            <View style={style.line}><View style={style.lineContent}></View></View> 
            <View style={style.rating}><Text>This is rating section, yet to complete. Rating needs to be added.</Text></View>
            <View style={style.line}><View style={style.lineContent}></View></View>
          </View> 

          <View style={style.lastRevised}>
            <TouchableOpacity activeOpacity={0.6} onPress={showLastRevised}>
                <View style={style.button}>
                   <Text style={style.buttonText}>View Previous Reviews</Text>      
                </View>
            </TouchableOpacity>
            { lastRevisedContent.length>0? <Text style={style.showLastRevisedContent}>{lastRevisedContent}</Text>: null }

            <TouchableOpacity activeOpacity={0.6} >  
                <View style={style.button}>
                   <Text style={style.buttonText2}>+ Add new Review</Text>      
                </View>
            </TouchableOpacity> 
           

          </View>
      </View>
    );
  }
  

  const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white', 
    },
    imageContainer: {
      alignItems: 'center',
      height: 260,
      width: '100%',
      marginVertical: 5,
    },
    supervisorImageStyle: {
      width: 150,
      height: 150,
      borderWidth: 5,
      borderRadius: 40,
      marginVertical: 20,   
    },
    nameText:{
      color: 'black',
      fontSize: 20,
      fontWeight: 'bold',
    },
    profileText:{
      color: 'black',
      fontSize: 20,
    },
    reviewContent: {
      //  backgroundColor: 'yellow',
        marginHorizontal: 20,
    },
    line: {
      height: 2,
      marginVertical: 5,
    },
    lineContent: {
      flex: 1,
      backgroundColor: '#e6e6e6',
    },
    rating: { 
      marginVertical: 20,
      alignSelf: 'center',
    },
    lastRevised: {
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 5,
    },
    button: {
      marginTop: 20,
      marginBottom: 2,
      marginHorizontal: 20,   
      alignItems: 'center',    
    },
    buttonText: {
      padding: 10,  
      color: '#5ead97',  
      fontSize: 15,
      fontWeight: 'bold',
    },
    buttonText2: {
      padding: 10,  
      color: 'red',  
      fontSize: 15,
      fontWeight: 'bold',
    },
    showLastRevisedContent: {
      backgroundColor: '#5ead97',
      borderRadius: 10,
      padding: 10,
    },
    formContainer: {
      padding: 20, 
      backgroundColor: 'red',
    },
  });