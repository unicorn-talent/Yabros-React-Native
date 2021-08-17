// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import { View, Text, SafeAreaView, Button, Image } from 'react-native';
import { ListItem} from 'react-native-elements'
const list = [
    {
      name: 'Change Email'
    },
    {
      name: 'Change Password'
    },
    {
        name: 'Update Profile'
    }
]

const list2 = [
    {
      name: 'About'
    },
    {
      name: 'Contact Yabros'
    },
    {
        name: 'Sign Out'
    }
]
const SettingsScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{backgroundColor: '#039be5', height: 200}}>
                <Image source={require('../../Image/avatar.png')} resizeMode='contain' style={{ height: 120, marginTop:20, marginLeft:'auto', marginRight: 'auto'}} />
                <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white', marginLeft:'auto', marginRight: 'auto'}}>
                       David Ov Onos
                </Text>
            </View>
            <View>
            {
                list.map((l) => (
                <ListItem key={l} bottomDivider>
                    <ListItem.Content>
                    <ListItem.Title>{l.name}</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
                ))
            }
            </View>
            {/* {'\n'} */}
            <View style={{marginTop: 40}}>
            {
                list2.map((l) => (
                <ListItem key={l} bottomDivider>
                    <ListItem.Content>
                    <ListItem.Title>{l.name}</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
                ))
            }
            </View>
        </SafeAreaView>
    );
};

export default SettingsScreen;