 import React from 'react';
 import {NavigationContainer} from '@react-navigation/native';
 import {createNativeStackNavigator} from '@react-navigation/native-stack';
 import LoginScreen from '../screens/Login/LoginScreen';

 import SplashScreen from '../screens/Splash/SplashScreen';

 const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};




// import LoginScreen from '../screens/Login/LoginScreen';
<Stack.Navigator screenOptions={{headerShown: false}}>
  <Stack.Screen
    name="Splash"
    component={SplashScreen}
  />

  <Stack.Screen
    name="Login"
    component={LoginScreen}
  />
</Stack.Navigator>
 export default AppNavigator;
 