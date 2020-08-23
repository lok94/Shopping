import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { scale } from 'react-native-size-matters';
import {dummyData} from '../components/Data';

class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            data: []
        }
       
    }



    searchData(text) {
        const newData = dummyData.filter(item => {
            if (item.name.toUpperCase().match(text.toUpperCase()))
                return item;
        });

        if (!text || text === '') {
            this.setState({
                data: [],
                text: text
            })
        } else {
            this.setState({
                data: newData,
                text: text
            })
        }


    }


    itemSeparator = () => {
        return (
            <View style={{ borderColor: '#95A5A6', borderWidth: scale(1) }} />
        )
    }



    render() {
        return (
            <View style={{ backgroundColor: '#fff', flex: 1 }}>
                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <Image
                            style={{ width: scale(20), height: scale(20), marginLeft: scale(10) }}
                            source={require("../assets/arrow.png")}
                        />
                    </TouchableOpacity>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.searchData(text)}
                        value={this.state.text}
                        underlineColorAndroid='transparent'
                        placeholder="Search by Name" />



                </View>
                <View style={{ borderColor: '#95A5A6', borderWidth: scale(4) }} />

                <FlatList

                    data={this.state.data}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={this.itemSeparator}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("Detail", {
                                    id: item.id,
                                    name: item.name,
                                    image: item.image,
                                    stars: item.stars,
                                    reviews: item.reviews,
                                    distance: item.distance
                                })}>
                                <Text style={styles.row}>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    }


                    }
                />


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: scale(45),
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
    },
    textInput: {
        flex: 1,
        marginLeft: scale(15),
        fontSize: scale(15)
    },
    row: {
        padding: scale(10),
        fontSize: scale(15)
    }
})

export default SearchScreen;