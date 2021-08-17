// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import { PROPERTY_TYPES } from '@babel/types';
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, TextInput} from 'react-native';

const PaymentOptions = ( props ) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ marginTop:40 , padding: 16, alignContent:'center', justifyContent:'center', alignItems:'center' }}>
                <View style={styles.titleside}>
                    <Text style={styles.title}>
                        Reference Number
                    </Text>
                </View>
                <View style={styles.card}>
                    <Image source={require('../../Image/pay1.png')} resizeMode='contain' style={{ height: 50, marginLeft:20}} />
                    <View style={{marginLeft: 20}}>
                        <Text style={styles.text1}>
                            Yabros Global Nigeria Limited
                        </Text>
                        <Text style={styles.text2}>
                            2032668438
                        </Text>
                        <Text style={styles.text3}>
                            First Bank
                        </Text>
                    </View>
                </View>
                <View style={styles.text4}>
                    <Text style={styles.text5}>
                        Make your payment to account details above and enter your receipt reference number below
                    </Text>
                </View>
                <View style={styles.SectionStyle}>
                    <TextInput
                        style={styles.inputStyle}
                        // onChangeText={(quantity) =>
                        //     setQuantity(quantity)
                        // }
                        // placeholder="Warri, Delta State" //12345
                        // placeholderTextColor="#8b9cb5"
                        // onSubmitEditing={Keyboard.dismiss}
                    />
                </View>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    resizeMode= 'contain'
                    onPress = { () => props.navigation.navigate('Success') }
                >
                    <Text style={styles.buttonTextStyle2}>
                       Place Booking
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
    card: {
        flexDirection: 'row',
        backgroundColor: '#f7f7f7',
        width: '90%',
        height: 100,
        alignItems: 'center',
    },
    text1: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    text2: {
        fontSize: 14,
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