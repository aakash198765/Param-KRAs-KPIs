 import React from 'react';
 import {View, Text, Button, StyleSheet, FlatList, SafeAreaView, StatusBar} from 'react-native';
 //
import { HeaderBackButton } from '@react-navigation/stack';

 export default function KraKpi(props) {
  const { navigation } = props;
  navigation.setOptions({
     headerLeft: () => (<HeaderBackButton {...props} onPress={()=>navigation.goBack()} />),
     headerStyle: {
      backgroundColor: '#5ead97',
    }
  }); 

  // const Variables
  const criteriaList = [
    {id: 1, criteria: 'Task Assigned', task: 'KRAs & KPIs Project'},
    {id: 2, criteria: 'Task Progress', task: 'Individual Level KRAs & KPIs Completed'},
    {id: 3, criteria: 'Time Duration', task: '1 Month'},
    {id: 4, criteria: 'Code Efficiency', task: 'Complexity Decreased'},
    {id: 5, criteria: 'Task Completed', task: 'No'},
  ];
 
  const renderItem = ({item}) => { 
    return (
      <View style={style.item}> 
             <Text style={style.criteria}>{item.criteria}</Text> 
             <View style={style.line}><View style={style.lineContent}></View></View> 
             <Text style={style.criteria} numberOfLines={1} >{item.task}</Text>
      </View>
    );
  };

    return ( 
    <View style={style.container}>
        <View style={style.headerText}> 
          <Text style={style.text1}>Performance Metrics Measures Criteria </Text>
        </View> 

        <FlatList 
        data={criteriaList}
        renderItem={renderItem}
       
        />        
    </View>
    );
  }
  

  const style = StyleSheet.create({
    container: {
      flex: 1,
    },
    headerText: {
      marginVertical: 20,
      backgroundColor: 'white',
      marginHorizontal: 20,
      height: 80,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
     
  },
    text1: {
      alignSelf: 'center',
      fontSize: 18,
    },
    item: {
      backgroundColor: '#008066',
      padding: 15,
      marginVertical: 8,
      marginHorizontal: 16,
      alignItems: 'center'
    },
    criteria: {
      fontSize: 18,
      marginHorizontal: 10,
      color: 'white',
    },
    line: {
      height: 20,
      marginVertical: 1,
    },
    lineContent: {
      flex: 1,
      backgroundColor: 'red',
    },
  });