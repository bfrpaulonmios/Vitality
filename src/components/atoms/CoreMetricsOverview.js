import { StyleSheet, Text, View, ScrollView, Platform } from 'react-native';
import React from 'react';

const Colors = require("./../../../assets/Colors.json");

const CoreMetricsOverview = () => {
    const metrics = [
        { title: 'Heart Rate', value: '72 bpm', color: 'primary' },
        { title: 'Sleep Quality', value: '85%', color: 'accent' },
        { title: 'Steps Taken', value: '10,000 steps', color: 'primary' },
        { title: 'Distance Walked', value: '100 m', color: 'accent' },
        { title: 'Calories Burned', value: '1000 cal', color: 'primary' },
        { title: 'Steps Burned', value: '10,000 steps', color: 'accent' },
    ];

    return (
        <ScrollView horizontal style={styles.carousel}>
            {metrics.map((metric, index) => (
                <View key={index} style={[styles.card, { backgroundColor: Colors[metric.color]['100'] }, shadowStyle]}>
                    <Text style={styles.cardTitle}>{metric.title}</Text>
                    <Text style={styles.cardValue}>{metric.value}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

export default CoreMetricsOverview;

const shadowStyle = Platform.select({
    ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    android: {
        elevation: 5,
    },
});

const styles = StyleSheet.create({
    carousel: {
        flex: 1,
        flexDirection: 'row',
        minHeight: 100,
        maxWidth: '100%',
        flexWrap: 'wrap',
    },
    
    card: {
        marginHorizontal: 10,
        borderRadius: 8,
        padding: 20,
        width: "18%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardTitle: {
        color: Colors.text['100'],
        marginBottom: 10,
    },
    cardValue: {
        color: Colors.text['100'],
        fontSize: 18,
        fontWeight: 'bold',
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: Colors.text['100'],
    },
});
