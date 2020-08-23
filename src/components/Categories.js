import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {scale} from 'react-native-size-matters';

const Categories = () => {
    return(
      <View style={styles.categoryView}>

      <View style={styles.categoryView2}>
        <View style={styles.circleView}>
          <Image source={require("../assets/pizza.png")} style={styles.image} />
        </View>
        <Text style={styles.text}>Food</Text>
      </View>



      <View style={styles.categoryView2}>
        <View style={styles.circleView}>
          <Image source={require("../assets/fashion.png")} style={styles.image} />
        </View>
        <Text style={styles.text}>Clothes</Text>
      </View>

      <View style={styles.categoryView2}>
        <View style={styles.circleView}>
          <Image source={require("../assets/travel.png")} style={styles.image} />
        </View>
        <Text style={styles.text}>Travel</Text>
      </View>

      <View style={styles.categoryView2}>
        <View style={styles.circleView}>
          <Image source={require("../assets/face.png")} style={styles.image} />
        </View>
        <Text style={styles.text}>Beauty</Text>
      </View>

      <View style={styles.categoryView2}>
        <View style={styles.circleView}>
          <Image source={require("../assets/gift.png")} style={styles.image} />
        </View>
        <Text style={styles.text}>Gifts</Text>
      </View>

    </View>

    );
} 

const styles = StyleSheet.create({
  circleView: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(50 / 2),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    elevation: 5
  },
  categoryView: {
    marginTop: scale(5),
    height: scale(70),
    flexDirection: 'row',
    marginHorizontal: scale(15),
    justifyContent: 'space-between'
  },

  categoryView2: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  image: {
    width: scale(28),
    height: scale(28),
  },

  text: {
    fontSize: 12
  }
})

export default Categories;