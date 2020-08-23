import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { scale } from 'react-native-size-matters';

const DetailView = (props) => {

    const { name, image, distance, reviews, stars } = props.route.params;

    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>

            <View style={styles.mainView}>
                <TouchableOpacity
                    onPress={() => props.navigation.goBack()}>
                    <Image
                        style={{ width: scale(20), height: scale(20), marginLeft: scale(10) }}
                        source={require("../assets/arrow.png")}
                    />
                </TouchableOpacity>
                <Text style={{ fontSize: scale(18), marginLeft: scale(15), fontWeight: 'bold' }}>Detail View</Text>
            </View>

            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={image} />
                <Text style={styles.itemName}>{name}</Text>
                <View style={styles.itemreview}>
                    <Image
                        style={{ width: scale(10), height: scale(10) }}
                        source={require("../assets/pin.png")} />
                    <Text
                        style={{ fontSize: scale(10) }}>
                        {distance} ({reviews} Reviews)
                    </Text>
                </View>
                <Text style={styles.stars}>{stars}</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({

    mainView: {
        height: scale(40),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: '#000',
        elevation: scale(5),
        margin: scale(5)
    },

    container: {
        margin: scale(10),
        width: scale(180),
        height: scale(180),
        backgroundColor: '#fff',
        shadowColor: '#000',
        elevation: scale(5),


    },
    title: {
        fontSize: scale(18),
        fontWeight: 'bold',
        marginLeft: scale(15),
        marginBottom: scale(5)
    },
    image: {
        width: scale(150),
        height: scale(110),
        marginBottom: scale(3),
        alignSelf: 'center'
    },
    text: {
        fontWeight: 'bold'
    },
    itemName: {
        fontSize: scale(13),
        marginLeft: scale(10)
    },
    itemreview: {
        fontSize: scale(13),
        marginLeft: scale(10)
    },
    stars: {
        fontSize: scale(15),
        color: 'red',
        fontWeight: 'bold',
        marginLeft: scale(10)
    }
})

export default DetailView;