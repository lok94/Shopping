import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, ScrollView } from 'react-native';
import { scale } from 'react-native-size-matters';

const GridView = () => {

    const [result, setResult] = useState(
        [
            {
                id: 1,
                name: "Kids Zone",
                image: require("../assets/chaat.jpg"),
                stars: "* * * *",
                reviews: 23,
                distance: ' 1.3Km'
            },
            {
                id: 2,
                name: "Best Bakery",
                image: require("../assets/suits.jpg"),
                stars: "* * *",
                reviews: 13,
                distance: '2.1Km'
            },
            {
                id: 3,
                name: "Kids Zone",
                image: require("../assets/kids-girl.jpg"),
                stars: "* * * *",
                reviews: 23,
                distance: '1.3Km'
            },
            {
                id: 4,
                name: "Best Bakery",
                image: require("../assets/plane.jpg"),
                stars: "* * *",
                reviews: 13,
                distance: '2.1Km'
            },
        ]
    )

    const numColumns = 2

    const _renderItem = ({ item, index }) => {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={item.image} />
                <Text style={styles.itemName}>{item.name}</Text>
                <View style={styles.itemreview }>
                    <Image
                        style={{ width: scale(10), height: scale(10) }}
                        source={require("../assets/pin.png")} />
                    <Text 
                        style={{ fontSize: scale(10) }}>
                            {item.distance} ({item.reviews} Reviews)
                    </Text>
                </View>
                <Text style={styles.stars}>{item.stars}</Text>
            </View>
        )
    }



    return (
        <View style={{ marginTop: scale(15), }}>
            <FlatList
                data={result}
                keyExtractor={item => item.id}
                renderItem={_renderItem}
                numColumns={numColumns}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        alignSelf : 'center'
    },
    text: {
        fontWeight: 'bold'
    },
    itemName : {
        fontSize: scale(13), 
        marginLeft: scale(10)
    },
    itemreview : {
        fontSize: scale(13), 
        marginLeft: scale(10)
    },
    stars  :{
        fontSize: scale(15), 
        color: 'red', 
        fontWeight: 'bold',  
        marginLeft: scale(10)
    }
})

export default GridView;