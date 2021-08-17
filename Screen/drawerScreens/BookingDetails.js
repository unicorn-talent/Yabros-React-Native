// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';

const BookingDetails = ( props ) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1, padding: 16 }}>
                <View style={styles.titleside}>
                    <Text style={styles.title}>
                        Booking Details
                    </Text>
                </View>
                <View style={styles.count}>
                    <View>
                        <Image source={require('../../Image/boat2.png')} resizeMode='contain' style={{ height: 100, width: 100, }} />
                    </View>
                    <View >
                        <Text style={styles.text} >
                            {'\n\n'}x 1
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.text}>
                            {'\n'}
                            200Hp
                        </Text>
                        <Text style={styles.text}>
                            3 Days
                        </Text>
                        <Text style={styles.text}>
                            Wed Aug 4 10:17:00 2021
                        </Text>
                    </View>
                </View>
                <View style={styles.textside}>
                    <Text style={styles.subtitle}>
                        Address
                    </Text>
                    <Text style={styles.text}>
                        168 Warri, Delta State
                    </Text>
                </View>
                <View style={styles.textside}>
                    <Text style={styles.subtitle}>
                        Other
                    </Text>
                    <Text style={styles.text}>
                        No
                    </Text>
                </View>
                <View style={styles.textside}>
                    <Text style={styles.subtitle}>
                        Total                $75000.00
                    </Text>
                </View>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    resizeMode= 'contain'
                    // onPress={handleSubmitPress}
                    onPress = { () => props.navigation.navigate('PaymentOptions') }
                >
                    <Text style={styles.buttonTextStyle2}>
                        Confirm Booking
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default BookingDetails;

const styles = StyleSheet.create({
    titleside: {
        // flex: 1,
        justifyContent: 'center',
        height: 100
    },
    title: {
        fontSize: 30,
        marginLeft: 35,
        marginBottom: 16,
        fontWeight: 'bold'
    },
    textside: {
        marginTop: 20,
        justifyContent: 'center',
        height: 100
    },
    subtitle: {
        fontSize: 22,
        marginLeft: 35,
        marginBottom: 16,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
        color: 'grey',
        marginLeft: 35
    },
    count: {
        // flex: 1,
        flexDirection: 'row',
        width: '100%',
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
        marginLeft: 'auto',
        marginRight: 'auto',
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