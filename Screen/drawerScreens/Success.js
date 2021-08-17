// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import { PROPERTY_TYPES } from '@babel/types';
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, TextInput} from 'react-native';

const Success = ( props ) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ marginTop:40 , padding: 16, alignContent:'center', justifyContent:'center', alignItems:'center' }}>
                <Image source={require('../../Image/success.png')} resizeMode='contain' style={{ height: 50, marginTop:100}} />
                <View style={{marginLeft: 20}}>
                    <Text style={styles.text1}>
                        Booking has been placed
                    </Text>
                    <Text style={styles.text2}>
                       Booking has been placed, please check your order to get the details of your booking
                    </Text>
                </View>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    resizeMode= 'contain'
                    onPress = { () => props.navigation.navigate('Final') }
                >
                    <Text style={styles.buttonTextStyle2}>
                       Continue
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>    
    );
};

export default Success;

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
        marginTop: 50,
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
    text1: {
        marginTop: 40,
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#039be5'
    },
    text2: {
        marginTop:10,
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    text4: {
        width: '90%',
        marginTop: 30
    },
    text5: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#4f4f4f',
    },
    SectionStyle: {
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 20,
    },
    inputStyle: {
        flex: 1,
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        paddingLeft: 15,
        paddingRight: 15,
        borderBottomWidth: 2,
        borderColor: '#dadae8',
    },
});