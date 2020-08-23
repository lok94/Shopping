import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import {scale} from 'react-native-size-matters';

const SlideView = ({ results }) => {

    if (!results.length) {
        return null;
    }


    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style = {{marginLeft : scale(15)}}>
                            <Image
                                style={styles.image}
                                source={item.image } />
                                {/* <View style = {{flexDirection: 'row', alignItems:'center'}}>
                                <Image
                                style={{width : scale(10), height : scale(10)}}
                                source={require("../assets/pin.png") } />
                                <Text>{item.distance} ({item.reviews} Reviews)</Text> 
                                </View>
                            <Text style = {{fontSize: scale(15), color : 'red'}}>{item.stars}</Text> */}
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: scale(10),
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    image : {
        width :220,
        height : 130,
        borderRadius : 15,
        marginBottom : 5
      },
      text: {
        fontWeight : 'bold'
      }
})

export default SlideView;