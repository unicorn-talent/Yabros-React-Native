// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const ContactUs = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1, padding: 16 }}>
                <View style={styles.titleside}>
                    <Text style={styles.title}>
                        Contact Us
                    </Text>
                </View>
                <View style={styles.textside}>
                    <Text style={styles.subtitle}>
                        Address
                    </Text>
                    <Text style={styles.text}>
                        168 Warri/Sapele Road, Opposite Ojojo Primary School, Delta State, Nigeria
                    </Text>
                </View>
                <View style={styles.textside}>
                    <Text style={styles.subtitle}>
                        Phone Number
                    </Text>
                    <Text style={styles.text}>
                        +2348051847699
                    </Text>
                </View>
                <View style={styles.textside}>
                    <Text style={styles.subtitle}>
                        Website
                    </Text>
                    <Text style={styles.text}>
                        www.yabros.com.ng
                    </Text>
                </View>
                <View style={styles.textside}>
                    <Text style={styles.subtitle}>
                        Email
                    </Text>
                    <Text style={styles.text}>
                        yabroslogistics@gmail.com
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ContactUs;

const styles = StyleSheet.create({
    titleside: {
        flex: 1,
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
        flex: 1,
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
        textAlign: 'left',
        color: 'grey',
        marginLeft: 35
    },
});