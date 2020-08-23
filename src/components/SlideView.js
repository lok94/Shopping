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