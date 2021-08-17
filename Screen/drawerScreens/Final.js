// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Final = ( props ) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1, padding: 16 }}>
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
                    <View >
                        <Text style={styles.subtitle}>
                            Payment Option
                        </Text>
                        <Text style={styles.text}>
                            Online Transfer
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.subtitle}>
                            Payment Status
                        </Text>
                        <Text style={styles.text}>
                            Sent
                        </Text>
                    </View>
                </View>
                <View style={styles.textside}>
                    <View>
                        <Text style={styles.subtitle}>
                            Address
                        </Text>
                        <Text style={styles.text}>
                            168 Warri, Delta State
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.subtitle}>
                            Other
                        </Text>
                        <Text style={styles.text}>
                            No
                        </Text>
                    </View>
                </View>
                <View style={styles.textside}>
                    <View>
                        <Text style={styles.subtitle}>
                            Booking Date
                        </Text>
                        <Text style={styles.text}>
                            Tue Aug 03 2021
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.subtitle}>
                            Pickup Date
                        </Text>
                        <Text style={styles.text}>
                            Wed Aug 04 2021
                        </Text>
                    </View>
                </View>
                <View style={styles.textside}>
                    <View>
                        <Text style={styles.subtitle}>
                            Booking Status
                        </Text>
                        <Text style={styles.text}>
                            Pending
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.subtitle}>
                            Reference Number
                        </Text>
                        <Text style={styles.text}>
                            1255363
                        </Text>
                    </View>
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
                    onPress = { () => props.navigation.navigate('HomeScreen') }
                >
                    <Text style={styles.buttonTextStyle2}>
                        Ok
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Final;

const styles = StyleSheet.create({
    titleside: {
        // flex: 1,
        justifyContent: 'center',
        height: 100
    },
    title: {
        fontSize: 30,
        marginLeft: 15,
        // marginBottom: 16,
        fontWeight: 'bold'
    },
    textside: {
        // marginTop: 20,
        justifyContent: 'center',
        height: 100,
        flexDirection: 'column',
        marginLeft: 60
    },
    subtitle: {
        fontSize: 22,
        marginLeft: 15,
        // marginBottom: 16,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
        color: 'grey',
        marginLeft: 15
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
        height: 50,
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
        // paddingVertical: 15,
        fontSize: 25,        
        textAlign: 'center',
        fontWeight: 'bold'
    },
});