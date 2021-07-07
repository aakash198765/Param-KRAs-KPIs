import React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';

export default function Logout({navigation}){
    return ( 
        <View> 
            {navigation.navigate('login')}
        </View>
    );
}