// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, { useState, createRef } from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    Image,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';
// import DatePicker from 'react-native-datepicker';



import AsyncStorage from '@react-native-community/async-storage';


const Contract = ( props ) => {
    const [duration, setDuration] = useState('');
    const [quantity, setQuantity] = useState('');
    const [location, setLocation] = useState('');
    const [quetion, setQuetion] = useState('');

    const [date, setDate] = useState('09-10-2020');

    return (
        <View style={styles.mainBody}>
            <ScrollView keyboardShouldPersistTaps="handled" >
                <View>
                    <KeyboardAvoidingView enabled>
                        <Text
                            style={{
                                fontSize: 30,
                                marginLeft: 35,
                                marginTop: 30,
                                fontWeight: 'bold'
                            }}>
                            Duration
                        </Text>
                        <View style={styles.SectionStyle}>
                            <TextInput
                                style={styles.inputStyle}
                                onChangeText={(duration) =>
                                    setDuration(duration)
                                }
                                placeholder="Duration" //dummy@abc.com
                                placeholderTextColor="#8b9cb5"
                                // onSubmitEditing={() =>   }
                            />
                            <Text style={styles.text}>
                                DAYS
                            </Text>
                        </View>
                        <Text
                            style={{
                                fontSize: 30,
                                marginLeft: 35,
                                fontWeight: 'bold'
                            }}>
                            Quantity
                        </Text>
                        <View style={styles.SectionStyle}>
                            <TextInput
                                style={styles.inputStyle}
                                onChangeText={(quantity) =>
                                    setQuantity(quantity)
                                }
                                placeholder="Quantity" //12345
                                placeholderTextColor="#8b9cb5"
                                onSubmitEditing={Keyboard.dismiss}
                            />
                            <Text style={styles.text}>
                                200HP
                            </Text>
                        </View>
                        <Text
                            style={{
                                fontSize: 30,
                                marginLeft: 35,
                                fontWeight: 'bold'
                            }}>
                            When do you need it?
                        </Text>
                        {/* <View style={styles.SectionStyle}>
                            <DatePicker
                                style={styles.datePickerStyle}
                                date={date} // Initial date from state
                                mode="date" // The enum of date, datetime and time
                                placeholder="select date"
                                format="DD-MM-YYYY"
                                // minDate="01-01-2016"
                                // maxDate="01-01-2019"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0,
                                },
                                dateInput: {
                                    marginLeft: 36
                                },
                                }}
                                onDateChange={(date) => { setDate(date); }}
                            />
                        </View> */}
                        <Text
                            style={{
                                fontSize: 30,
                                marginLeft: 35,
                                fontWeight: 'bold'
                            }}>
                            Location
                        </Text>
                        <View style={styles.SectionStyle}>
                            <TextInput
                                style={styles.inputStyle}
                                onChangeText={(location) =>
                                    setLocation(location)
                                }
                                placeholder="Warri, Delta State" //12345
                                placeholderTextColor="#8b9cb5"
                                onSubmitEditing={Keyboard.dismiss}
                            />
                        </View>
                        <Text
                            style={{
                                fontSize: 30,
                                marginLeft: 35,
                                fontWeight: 'bold'
                            }}>
                            Do you have any special request?
                        </Text>
                        <View style={styles.SectionStyle}>
                            <TextInput
                                style={styles.inputStyle}
                                onChangeText={(quetion) =>
                                    setQuetion(quetion)
                                }
                                placeholder="No" //12345
                                placeholderTextColor="#8b9cb5"
                                onSubmitEditing={Keyboard.dismiss}
                            />
                        </View>
                        <TouchableOpacity
                            style={styles.buttonStyle}
                            activeOpacity={0.5}
                            // onPress={handleSubmitPress}
                            onPress={() => props.navigation.navigate('BookingDetails')}
                        >
                            <Text style={styles.buttonTextStyle}>Continue</Text>
                        </TouchableOpacity>
                        
                    </KeyboardAvoidingView>
                </View>
            </ScrollView>
        </View>
    );
};
export default Contract;

const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignContent: 'center',
    },
    SectionStyle: {
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 20,
    },
    buttonStyle: {
        backgroundColor: '#7DE24E',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 25,
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 5,
        fontSize: 20,
        fontWeight: 'bold'
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
    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    datePickerStyle: {
        width: '100%',
        fontSize: 20,
        fontWeight: 'bold'
    }
});