// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import { PROPERTY_TYPES } from '@babel/types';
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Choose = ( props ) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1, padding: 16, alignContent:'center', justifyContent:'center', alignItems:'center' }}>

                <Image source={require('../../Image/boat2.png')} resizeMode='contain' style={{ height: 200 }} />
                <Text style={styles.buttonTextStyle}>
                    200HP
                    {'\n'}
                    $ 25000 /day
                </Text>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    resizeMode= 'contain'
                    // onPress={handleSubmitPress}
                    onPress = { () => props.navigation.navigate('Contract') }
                >
                    <Text style={styles.buttonTextStyle2}>
                        Book Now
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>    
    );
};

export default Choose;

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#7DE24E',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        height: 65,
        alignItems: 'center',
        borderRadius: 10,
        width:300,
        alignContent: 'center',
        justifyContent: 'center',
        // marginLeft: 35,
        // marginRight: 35,
        marginTop: 10,
        marginBottom: 25,
        textAlign:'center',
        color: 'white'
    },
    buttonTextStyle: {
        color: '#000',
        paddingVertical: 15,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'        
    },
    buttonTextStyle2: {
        color: '#fff',
        paddingVertical: 15,
        fontSize: 25,
        
        textAlign: 'center',
        fontWeight: 'bold'
    },
});