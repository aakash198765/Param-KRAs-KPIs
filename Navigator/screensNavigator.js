import 'react-native-gesture-handler';
 import  React, {useState} from 'react';
 import { StyleSheet, } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
 import {createDrawerNavigator} from '@react-navigation/drawer';
 // import Welcome & Login Screen
 import Welocme from '../screens/loginStack/welcomeScreen';
 import Login from '../screens/loginStack/loginScreen';
 // import screen components
 import HomeScreen from '../screens/homeScreen';
 import DetailsScreen from '../screens/detailScreen';
 //import Drawers Screen
 import Profile from '../screens/drawerScreens/profile';
 import Department from '../screens/drawerScreens/department';
 import Reviewer from '../screens/drawerScreens/reviewer';
 import MissionVision from '../screens/drawerScreens/missionVision';
 import KraKpi from '../screens/drawerScreens/krakpi';
 // Appbar component from react-native-paper
 import { Appbar, Menu , Drawer } from 'react-native-paper';
 import { white } from 'react-native-paper/lib/typescript/styles/colors';
//
import Logout from '../screens/drawerScreens/logout';

 const Stack = createStackNavigator(); 
 
// customizing the app header using react-native-paper Appbar ---for Home Screen
function CustomNavigationBarHome({navigation, previous, }){ 
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false); 

  return ( 
    <Appbar.Header style={{backgroundColor: '#5ead97'}}>
      <Appbar.Content title="KRA and KPI" subtitle="performance Indicator" />
      {previous? <Appbar.Action icon="magnify" onPress={() => {}} /> : <Appbar.Action icon="home" onPress={()=>{}} color="black" /> }

      <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Appbar.Action icon="help" size={20} color="black" onPress={()=>openMenu()} />
          }>
          <Menu.Item onPress={() => {console.log('Project is assigned ')}} title="Help & Support"  />
      </Menu>
      
      <Appbar.Action icon="menu" color="black" onPress={()=>navigation.toggleDrawer()} />        
    </Appbar.Header>
  );
}
 
function CustomNavigationBarDetail({navigation, previous, }){ 
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false); 

  return ( 
    <Appbar.Header style={{backgroundColor: '#5ead97'}}>
       { (previous)? <Appbar.BackAction onPress={navigation.goBack} /> : null }
  
      <Appbar.Content title="KRA and KPI" subtitle="performance Indicator" />
      {previous? <Appbar.Action icon="magnify" onPress={() => {}} /> : <Appbar.Action icon="home" onPress={()=>{}} color="black" /> }

      <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Appbar.Action icon="help" size={20} color="black" onPress={()=>openMenu()} />
          }>
          <Menu.Item onPress={() => {console.log('Project is assigned ')}} title="Help & Support"  />
      </Menu>
      
      <Appbar.Action icon="menu" color="black" onPress={()=>navigation.toggleDrawer()} />        
    </Appbar.Header>
  );
}

// Screen Navigation ----- stack of screens-----In Genral for Home & Detail Screens
 const ScreensNavigation =()=> { 
    return ( 
          <Stack.Navigator initialRouteName="Home" > 
            <Stack.Screen name="Home" component={HomeScreen} options={{ header: (props) => <CustomNavigationBarHome {...props}/>  }} />
            <Stack.Screen name="Details" component={DetailsScreen} options={{ header: (props) => <CustomNavigationBarDetail {...props}/>  }} />
           </Stack.Navigator> 
      );
 }

// Login Screen ---stack of screens for login 
//--custom navigation header using react-native paper
const CustomNavigationBarLogin =() => {
  return ( 
    <Appbar.Header style={{backgroundColor: 'white'}}>
         <Appbar.Content title="{{Param}}.Network" style={{ }} />
    </Appbar.Header>

  );
}

// screenOptions={{ header: (props) => <CustomNavigationBarLogin{...props} /> }}
const LoginScreenStack = () => {
  return( 
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} >
            <Stack.Screen name="welcome" component={Welocme} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="drawerNavigator" component={DrawerNavigator} />
       </Stack.Navigator> 
    </NavigationContainer> 
  );
}

// Profile screen stack
const ProfileScreenStack = () => {
  return( 
    <Stack.Navigator >
            <Stack.Screen name="profile" component={Profile} />
    </Stack.Navigator> 
  );
}
// Department Screen Stack
const DepartmentScreenStack = () => {
  return( 
    <Stack.Navigator > 
            <Stack.Screen name="department" component={Department} options={{title: 'Department'}} />
    </Stack.Navigator> 
  );
}
// Reviewer Screen Stack
const ReviewerScreenStack = () => {
  return( 
    <Stack.Navigator screenOptions={{headerLeft:()=> null}} >
            <Stack.Screen name="reviewer" component={Reviewer} options={{title: 'Reviewer'}} />
    </Stack.Navigator> 
  );
}
//Mission and Mission Screen Stack
const MissionVisionScreenStack = () => {
  return( 
    <Stack.Navigator screenOptions={{headerStyle:{backgroundColor: 'black'},  }} >
            <Stack.Screen name="missionVision" component={MissionVision} options={{title: 'Mission & Vision', }} />
    </Stack.Navigator>
  );
}
// KPAs $ KPIs Screen Stack
const KRAKPIScreenStack = () => {
  return( 
    <Stack.Navigator screenOptions={{headerLeft:()=> null}} >
            <Stack.Screen name="krakpi" component={KraKpi} options={{title: 'KRAs & KPIs'}} />
    </Stack.Navigator> 
  );
}


// Drawer Navigation
const Drawers = createDrawerNavigator();

const DrawerNavigator =() =>{
    return(
            <Drawers.Navigator drawerContentOptions={{activeTintColor: 'black', itemStyle: {marginVertical: 5, color: 'white'}, backgroundColor: '#5ead97', inactiveTintColor: 'white' }} > 
                <Drawers.Screen name="screensNavigationStack" component={ScreensNavigation} options={{ drawerLabel: 'Dashboard' }} />
                <Drawers.Screen name="profilestack" component={ProfileScreenStack} title="Profile" options={{ drawerLabel: 'Profile' }} />
                <Drawers.Screen name="departmentStack" component={DepartmentScreenStack} title="Department" options={{ drawerLabel: 'Department' }} />
                <Drawers.Screen name="reviewerStack" component={ReviewerScreenStack} title="Reviewer" options={{ drawerLabel: 'Reviewer' }} />
                <Drawers.Screen name="missionVisionStack" component={MissionVisionScreenStack} title="Mission & Vision" options={{ drawerLabel: 'Mission & Vision' }} />
                <Drawers.Screen name="krakpiStack" component={KRAKPIScreenStack}  title="KRAs & KPIs" options={{ drawerLabel: 'KRAs & KPIs' }} />
                <Drawers.Screen name="logout" component={Logout}  title="Logout" options={{ drawerLabel: 'Logout ??' }} />
            </Drawers.Navigator>
    );
} 

const styles=StyleSheet.create({
  drawerSection: {
    backgroundColor: 'grey',
    width: '45%'
  },


});



 export default LoginScreenStack;