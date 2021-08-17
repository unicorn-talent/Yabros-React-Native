// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native';

const RentTruck = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1, padding: 16 }}>
                <View
                    style={{
                        // flex: 1,
                        // alignItems: 'center',
                        justifyContent: 'center',
                        height: 100
                    }}>
                    <Text
                        style={{
                            fontSize: 30,
                            // textAlign: 'left',
                            marginLeft: 35,
                            marginBottom: 16,
                            fontWeight: 'bold'
                        }}>
                        Choose your equipment
                    </Text>
                </View>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    // onPress={handleSubmitPress}
                >
                    <Image source={require('../../../Image/swamp.png')} resizeMode='contain' style={{ height: 40, marginLeft:20 }} />
                    <Text style={styles.buttonTextStyle}>
                        Swamp Buggy
                        {'\n'}
                        $ 500000 /day
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    // onPress={handleSubmitPress}
                >
                    <Image source={require('../../../Image/tug.png')} resizeMode='contain' style={{ height: 40, marginLeft:20 }} />
                    <Text style={styles.buttonTextStyle}>
                        Tug Boats
                        {'\n'}
                        $ 500000 /day
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    // onPress={handleSubmitPress}
                >
                    <Image source={require('../../../Image/vessel.png')} resizeMode='contain' style={{ height: 40, marginLeft:20 }} />
                    <Text style={styles.buttonTextStyle}>
                        Vessels
                        {'\n'}
                        $ 500000 /day
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    // onPress={handleSubmitPress}
                >
                    <Image source={require('../../../Image/barge.png')} resizeMode='contain' style={{ height: 40, marginLeft:20 }} />
                    <Text style={styles.buttonTextStyle}>
                        Barge
                        {'\n'}
                        $ 3000000 /day
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    // onPress={handleSubmitPress}
                >
                    <Image source={require('../../../Image/excave.png')} resizeMode='contain' style={{ height: 40, marginLeft:20 }} />
                    <Text style={styles.buttonTextStyle}>
                        Excavators
                        {'\n'}
                        $ 4000000 /day
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>    
    );
};

export default RentTruck;

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#7DE24E',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
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
        color: '#FFFFFF',
        paddingVertical: 15,
        fontSize: 19,
        marginLeft: 20
    },
});