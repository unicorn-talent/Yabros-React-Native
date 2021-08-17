// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native';

const RentBoat = ( props ) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1, padding: 16 }}>
                <View
                    style={{
                        justifyContent: 'center',
                        height: 100
                    }}>
                    <Text
                        style={{
                            fontSize: 30,
                            marginLeft: 35,
                            marginBottom: 16,
                            fontWeight: 'bold'
                        }}>
                        Choose your boat
                    </Text>
                </View>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    onPress={() => props.navigation.navigate('Choose')}
                >
                    <Image source={require('../../../Image/boat1.png')} resizeMode='contain' style={{ height: 40, marginLeft:20 }} />
                    <Text style={styles.buttonTextStyle}>
                        200Hp
                        {'\n'}
                        $ 25000/Day
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    onPress={() => props.navigation.navigate('Choose')}
                >
                    <Image source={require('../../../Image/boat1.png')} resizeMode='contain' style={{ height: 40, marginLeft:20 }} />
                    <Text style={styles.buttonTextStyle}>
                        75Hp Boat
                        {'\n'}
                        $ 15000/Day
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    onPress={() => props.navigation.navigate('Choose')}
                >
                    <Image source={require('../../../Image/boat1.png')} resizeMode='contain' style={{ height: 40, marginLeft:20 }} />
                    <Text style={styles.buttonTextStyle}>
                        114Hp Boat
                        {'\n'}
                        $ 18000/Day
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    onPress={() => props.navigation.navigate('Choose')}
                >
                    <Image source={require('../../../Image/house.png')} resizeMode='contain' style={{ height: 40, marginLeft:20 }} />
                    <Text style={styles.buttonTextStyle}>
                        House Boat
                        {'\n'}
                        $ 120000/Day
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default RentBoat;

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#7DE24E',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#F5F5F5',
        height: 80,
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 10,
        marginBottom: 25,
        textAlign:'center',
        flexDirection: 'row'
    },
    buttonTextStyle: {
        color: '#fff',
        paddingVertical: 15,
        fontSize: 19,
        marginLeft: 20
    },
});