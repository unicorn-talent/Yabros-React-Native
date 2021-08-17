// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/
import 'react-native-gesture-handler';

// Import React and Component
import React from 'react';

// Import Navigators from React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import Screens
import SplashScreen from './Screen/SplashScreen';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import ForgotPassword from './Screen/ForgotPassword';
import DrawerNavigationRoutes from './Screen/DrawerNavigationRoutes';

import RentBoat from './Screen/drawerScreens/Exploer/RentBoat';
import RentEquipment from './Screen/drawerScreens/Exploer/RentEquipment';
import RentTruck from './Screen/drawerScreens/Exploer/RentTruck';
import WasteDiposable from './Screen/drawerScreens/Exploer/WasteDiposable';

import Choose from './Screen/drawerScreens/Choose';
import Contract from './Screen/drawerScreens/Contract';
import BookingDetails from './Screen/drawerScreens/BookingDetails';
import PaymentOptions from './Screen/drawerScreens/PaymentOptions';
import ReferenceNumber from './Screen/drawerScreens/ReferenceNumber';
import Success from './Screen/drawerScreens/Success';
import Final from './Screen/drawerScreens/Final';
const Stack = createStackNavigator();

// const AppNavigator = createStackNavigator({
//   RentBoat: RentBoat,
//   RentEquipment: RentEquipment,
//   RentTruck: RentTruck,
//   WasteDiposable: WasteDiposable
// });

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Register', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          title: 'Forgot Password', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNavigationRoutes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RentBoat"
          component={RentBoat}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="RentEquipment"
          component={RentEquipment}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="RentTruck"
          component={RentTruck}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="WasteDiposable"
          component={WasteDiposable}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Choose"
          component={Choose}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Contract"
          component={Contract}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="BookingDetails"
          component={BookingDetails}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="PaymentOptions"
          component={PaymentOptions}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="ReferenceNumber"
          component={ReferenceNumber}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Success"
          component={Success}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Final"
          component={Final}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;