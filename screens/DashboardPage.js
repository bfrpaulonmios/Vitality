import React from 'react';
import { StyleSheet, View, Modal, Pressable } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import LogoVitality from '../src/components/atoms/Logo.js';
import CoreMetricsOverview from '../src/components/atoms/CoreMetricsOverview.js';
import Colors from './../assets/Colors.json';
import Svg, { Path } from 'react-native-svg';
import { useState } from 'react';
import { Text } from 'react-native-elements/dist/index.js';
import { StatusBar } from 'expo-status-bar';

const DashboardPage = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const handlePressMenu = () => {
        setOpenMenu(!openMenu);
    }
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.header}>
                    <Pressable onPress={handlePressMenu}>
                        <Icon name="menu" type="ionicon" color={Colors.text['100']} size={30} />
                    </Pressable>
                    <LogoVitality />
                </View>
            </View>
            < CoreMetricsOverview />
            <Modal
                visible={openMenu}
                animationType="slide"
                onRequestClose={() => setOpenMenu(false)}
                style={{
                    margin: 30,
                    padding: 30,
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                }}
            >
                <View style={{ flex: 1, width: "100%", height: 100 }}>
                    <Pressable onPress={() => setOpenMenu(false)}>
                        <Icon name="close" type="ionicon" color={Colors.text['100']} size={30} />
                    </Pressable>
                </View>
            </Modal>

        </View >
    );
};

export default DashboardPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background[100],
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    header: {
        height: 100,
        width: "90%",
        paddingTop: 20,
        paddingBottom: 20,
        marginBottom: 20,
        display: 'flex',
        backgroundColor: Colors.background[300],
        alignItems: 'center',
        justifyContent: 'space-evenly',
        display: 'flex',
        width: '100%',
    },
});
