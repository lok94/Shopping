import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { scale } from 'react-native-size-matters';

class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dummyData : [
                {
                    id: 1,
                    name: "Kids Zone",
                    image: require("../assets/kids-dress.png"),
                    stars: "* * * *",
                    reviews: 23,
                    distance: ' 1.3Km'
                  },
                  {
                    id: 2,
                    name: "Best Bakery",
                    image: require("../assets/cake.png"),
                    stars: "* * *",
                    reviews: 13,
                    distance: '2.1Km'
                  },
    
                  {
                    id: 3,
                    name: "Haldiram",
                    image: require("../assets/chaat.jpg"),
                    stars: "* * * *",
                    reviews: 34,
                    distance: ' 1.9Km'
                },
                {
                    id: 4,
                    name: "Raymonds",
                    image: require("../assets/suits.jpg"),
                    stars: "* * *",
                    reviews: 16,
                    distance: '1.5Km'
                },
                {
                    id: 5,
                    name: "FirstCry",
                    image: require("../assets/kids-girl.jpg"),
                    stars: "* * * *",
                    reviews: 83,
                    distance: '5.8Km'
                },
                {
                    id: 4,
                    name: "Travel",
                    image: require("../assets/plane.jpg"),
                    stars: "* * *",
                    reviews: 73,
                    distance: '20.1Km'
                },
            ]
        }
    }
    render() {
        return (
            <View>
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
                        style={{ marginLeft: scale(20), flex: 1, }}
                        placeholder="Search by Name and Location"
                         
                    />
                </View>

               

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
    }
})

export default SearchScreen;