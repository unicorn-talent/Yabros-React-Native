// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native';

const WasteDiposable = () => {
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
                        Choose your Waste
                    </Text>
                </View>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    // onPress={handleSubmitPress}
                >
                    <Image source={require('../../../Image/waste2.png')} resizeMode='contain' style={{ height: 40, marginLeft:20 }} />
                    <Text style={styles.buttonTextStyle}>
                        Office Waste
                        {'\n'}
                        $ 1000 /bag
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    // onPress={handleSubmitPress}
                >
                    <Image source={require('../../../Image/waste2.png')} resizeMode='contain' style={{ height: 40, marginLeft:20 }} />
                    <Text style={styles.buttonTextStyle}>
                        Industrial Waste
                        {'\n'}
                        $ 2000 /ton
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    // onPress={handleSubmitPress}
                >
                    <Image source={require('../../../Image/waste2.png')} resizeMode='contain' style={{ height: 40, marginLeft:20 }} />
                    <Text style={styles.buttonTextStyle}>
                        Household Waste
                        {'\n'}
                        $ 800 /bag
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>    
    );
};

export default WasteDiposable;

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