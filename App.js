import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

 import HomeScreen from './src/screens/HomeScreen';
 import SideMenuScreen from './src/screens/SideMenuScreen';
 import SearchScreen from './src/screens/SearchScreen';
 import DetailView from './src/components/DetailView';


 const Stack = createStackNavigator();
 const Drawer = createDrawerNavigator();
 const MainStack = createStackNavigator();

 
 function MainStackScreen() {
  return (
    <MainStack.Navigator initialRouteName="Home" headerMode = "none">
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="Search" component={SearchScreen} />
      <MainStack.Screen name="Detail" component={DetailView} />
    </MainStack.Navigator>
  );
}
 

 function MyDrawerScreen() {
   return(
     <Drawer.Navigator  
     initialRouteName="Root"
    drawerContent={props => <SideMenuScreen {...props} />}>

     <Drawer.Screen name="Root"
        component={MainStackScreen}
        options={{gestureEnabled: true}}
        />
   </Drawer.Navigator>
   )
 }
 
 
 export default () => {
 
   return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName = "Main" headerMode = "none">
         <Stack.Screen name="Main" component={MyDrawerScreen} />
       </Stack.Navigator>
     </NavigationContainer>
   );
 };