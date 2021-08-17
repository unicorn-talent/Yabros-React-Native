
import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Image} from 'react-native';

const HomeScreen = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1, padding: 16 }}>
                <View
                    style={{
                        justifyContent: 'center',
                        height: 100
                    }}>
                    <Text
                        style={{
                            fontSize: 30,
                            textAlign: 'left',
                            marginLeft: 35,
                            fontWeight: 'bold'
                        }}>
                        Service
                    </Text>
                </View>

                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    onPress={() => props.navigation.navigate('RentBoat')}
                >
                    <Image source={require('../../Image/boat.png')} resizeMode='contain' style={{ height: 40, marginLeft:20 }} />
                    <Text style={styles.buttonTextStyle}>Rent a Boat</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    onPress={() => props.navigation.navigate('WasteDiposable')}
                >
                    <Image source={require('../../Image/waste.png')} resizeMode='contain' style={{ height: 40, marginLeft:20 }} />
                    <Text style={styles.buttonTextStyle}>Waste Disposal</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    onPress={() => props.navigation.navigate('RentEquipment')}
                >
                    <Image source={require('../../Image/equipment.png')} resizeMode='contain' style={{ height: 40, marginLeft:20 }} />
                    <Text style={styles.buttonTextStyle}>Rent Equipment</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    onPress={() => props.navigation.navigate('RentTruck')}
                >
                    <Image source={require('../../Image/truck.png')} resizeMode='contain' style={{ height: 40, marginLeft:20}} />
                    <Text style={styles.buttonTextStyle}>Rent a Truck</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#7DE24E',
        borderWidth: 0,
        color: '#000000',
        // borderColor: '#F5F5F5',
        height: 60,
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 10,
        marginBottom: 25,
        textAlign:'center',
        flexDirection: 'row'
        // flex: 1
    },
    buttonTextStyle: {
        color: '#fff',
        paddingVertical: 15,
        fontSize: 19,
        marginLeft: 20
    },
});