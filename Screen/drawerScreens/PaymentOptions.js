// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import { PROPERTY_TYPES } from '@babel/types';
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native';

const PaymentOptions = ( props ) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ marginTop:40 , padding: 16, alignContent:'center', justifyContent:'center', alignItems:'center' }}>
                <View style={styles.titleside}>
                    <Text style={styles.title}>
                        Payment Options
                    </Text>
                </View>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    resizeMode= 'contain'
                    onPress = { () => props.navigation.navigate('ReferenceNumber') }
                >
                    <Image source={require('../../Image/pay1-1.png')} resizeMode='contain' style={{ height: 50, marginRight:20}} />
                    <Text style={styles.buttonTextStyle2}>
                       Online Transfer
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    resizeMode= 'contain'
                    onPress = { () => props.navigation.navigate('ReferenceNumber') }
                >
                     <Image source={require('../../Image/pay2-2.png')} resizeMode='contain' style={{ height: 50, marginRight:20 }} />
                    <Text style={styles.buttonTextStyle2}>
                        Pay on Delivery
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>    
    );
};

export default PaymentOptions;

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        // marginLeft: 35,
        marginBottom: 100,
        fontWeight: 'bold'
    },
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
        color: 'white',
        flexDirection: 'row'
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
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },
});