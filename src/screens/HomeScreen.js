import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
import SlideView from '../components/SlideView';
import GridView from '../components/GrirdView';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import Categories from '../components/Categories';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [
        {
          id: 1,
          name: "Kids Zone",
          image: require("../assets/kids-dress.png"),
        },
        {
          id: 2,
          name: "Best Bakery",
          image: require("../assets/cake.png"),
        },
      ]
    }
  }


  headerRender() {
    return (
      <View
        style={{
          height: scale(60), backgroundColor: "#fff",
        }}>

        <View style={{ flexDirection: 'row', margin: scale(12), justifyContent: 'center', alignItems: 'center' }} >

          <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
            <Image source={require("../assets/menu.png")} style={{ width: scale(20), height: scale(20) }} />
          </TouchableOpacity>

          <View style={{
            height: scale(35),
            width: scale(200),
            backgroundColor: "#F8F9F9",
            marginLeft: scale(20),
            borderRadius: scale(15),
           
          }}>
            <TouchableOpacity 
            onPress = { () => this.props.navigation.navigate("Search")}
            style = {{ flexDirection: 'row', padding: scale(10), alignItems: 'center'}}>
              <Image style={{ width: scale(10), height: scale(10) }} source={require("../assets/pin.png")} />
              <Text style={{ color: '#95A5A6' }}>  Search by Name</Text>
            </TouchableOpacity>


          </View>



          <View style={{ flexDirection: 'row', width: scale(45), justifyContent: 'space-between', marginLeft: scale(40) }}>
            <TouchableOpacity>
              <Image source={require("../assets/filter.png")} style={{ width: scale(15), height: scale(15) }} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image source={require("../assets/bell.png")} style={{ width: scale(15), height: scale(15) }} />
            </TouchableOpacity>
          </View>

        </View>

        <View style={{ margin: 15, backgroundColor: 'grey' }}>

        </View>


      </View>

    )
  }


  render() {
    return (
      <View style={styles.container}>

        {this.headerRender()}

        <KeyboardAwareScrollView>

          <SlideView results={this.state.results} />

          <Categories />

          <GridView results={this.state.results} />

        </KeyboardAwareScrollView>

      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

})

export default HomeScreen;