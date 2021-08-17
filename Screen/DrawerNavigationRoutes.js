// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React
import React from 'react';

// Import Navigators from React Navigation
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Import Screens
import HomeScreen from './drawerScreens/HomeScreen';
import SettingsScreen from './drawerScreens/SettingsScreen';
import RentBoat from './drawerScreens/Exploer/RentBoat';
import RentEquipment from './drawerScreens/Exploer/RentEquipment';
import RentTruck from './drawerScreens/Exploer/RentTruck';
import WasteDiposable from './drawerScreens/Exploer/WasteDiposable';
import ContactUs from './drawerScreens/ContactUs';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const homeScreenStack = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: 'Explore', //Set Header Title
                    headerLeft: () => (
                        <NavigationDrawerHeader navigationProps={navigation} />
                    ),
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
const RentBoatStack = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="RentBoat">
            <Stack.Screen
                name="RentBoat"
                component={RentBoat}
                options={{
                    title: 'Rent a Boat', //Set Header Title
                    headerLeft: () => (
                        <NavigationDrawerHeader navigationProps={navigation} />
                    ),
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
const WasteDiposableStack = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="WasteDiposable">
            <Stack.Screen
                name="WasteDiposable"
                component={WasteDiposable}
                options={{
                    title: 'Waste Diposable', //Set Header Title
                    headerLeft: () => (
                        <NavigationDrawerHeader navigationProps={navigation} />
                    ),
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
const RentEquipmentStack = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="RentEquipment">
            <Stack.Screen
                name="RentEquipment"
                component={RentEquipment}
                options={{
                    title: 'Rent Equipment', //Set Header Title
                    headerLeft: () => (
                        <NavigationDrawerHeader navigationProps={navigation} />
                    ),
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
const RentTruckStack = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="RentTruck">
            <Stack.Screen
                name="RentTruck"
                component={RentTruck}
                options={{
                    title: 'Rent a Truck', //Set Header Title
                    headerLeft: () => (
                        <NavigationDrawerHeader navigationProps={navigation} />
                    ),
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
const contactUsStack = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="ContactUs">
            <Stack.Screen
                name="ContactUs"
                component={ContactUs}
                options={{
                    title: 'Contact Us', //Set Header Title
                    headerLeft: () => (
                        <NavigationDrawerHeader navigationProps={navigation} />
                    ),
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
const settingScreenStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            initialRouteName="SettingsScreen"
            screenOptions={{
                headerLeft: () => (
                    <NavigationDrawerHeader navigationProps={navigation} />
                ),
                headerStyle: {
                    backgroundColor: '#307ecc', //Set Header color
                },
                headerTintColor: '#fff', //Set Header text color
                headerTitleStyle: {
                    fontWeight: 'bold', //Set Header text style
                },
            }}>
            <Stack.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                options={{
                    title: 'Settings', //Set Header Title
                }}
            />
        </Stack.Navigator>
    );
};
const DrawerNavigatorRoutes = (props) => {
    return (
        <Drawer.Navigator
            drawerContentOptions={{
                activeTintColor: '#cee1f2',
                color: '#cee1f2',
                itemStyle: { marginVertical: 5, color: 'white' },
                labelStyle: {
                    color: '#d8d8d8',
                },
            }}
            screenOptions={{ headerShown: false }}
            drawerContent={CustomSidebarMenu}>
            <Drawer.Screen
                name="homeScreenStack"
                options={{ drawerLabel: 'Explore' }}
                component={homeScreenStack}
            />
            <Drawer.Screen
                name="RentBoatStack"
                options={{ drawerLabel: 'Rent a Boat' }}
                component={RentBoatStack}
            />
            <Drawer.Screen
                name="WasteDiposableStack"
                options={{ drawerLabel: 'Waste Diposable' }}
                component={WasteDiposableStack}
            />
            <Drawer.Screen
                name="RentEquipmentStack"
                options={{ drawerLabel: 'Rent Equipment' }}
                component={RentEquipmentStack}
            />
            <Drawer.Screen
                name="RentTruckStack"
                options={{ drawerLabel: 'Rent a Truck' }}
                component={RentTruckStack}
            />
            <Drawer.Screen
                name="settingScreenStack"
                options={{ drawerLabel: 'Setting Screen' }}
                component={settingScreenStack}
            />
            <Drawer.Screen
                name="contactUsStack"
                options={{ drawerLabel: 'Contact Us' }}
                component={contactUsStack}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigatorRoutes;