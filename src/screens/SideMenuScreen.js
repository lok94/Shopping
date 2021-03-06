import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';


const SideMenuScreen = (props) => {
  return (
    <View>
      <View
        style={{
          height: scale(60), backgroundColor: "#F8F9F9"
        }}>
        <View style = {{flexDirection: 'row', padding : scale(10)}}>
          <Image 
            style={{ width: scale(40), height: scale(40) }} 
            source={require("../assets/profile.png")} />
          <View>
          <Text style={{ fontSize: scale(15), marginLeft: scale(20) }}>Stephen Grinder</Text>
          <Text style={{ fontSize: scale(10), marginLeft: scale(20) }}>Noida, India</Text>
          </View>
          
        
        </View>

        <View>
          <TouchableOpacity style = {styles.view}>
          <Image style={styles.image} source={require("../assets/home.png")} />
          <Text style={styles.text}>Home</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style = {styles.view}>
          <Image style={styles.image} source={require("../assets/account.png")} />
          <Text style={styles.text}>My Account</Text>
          </TouchableOpacity>
        </View>

        <View>
        <TouchableOpacity style = {styles.view}>
        <Image style={styles.image} source={require("../assets/setting.png")} />
        <Text style={styles.text}>Settings</Text>
          </TouchableOpacity>
        </View>

        <View>
        <TouchableOpacity style = {styles.view}>
        <Image style={styles.image} source={require("../assets/logout.png")} />
        <Text style={styles.text}>Logout</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  view : {
    flexDirection : 'row',
    alignItems:'center', 
    padding : scale(10)
  },
  image : {
    width: scale(30), 
    height: scale(30)
  },
  text : {
    fontSize: scale(15), 
    fontWeight : 'bold', 
    marginLeft: scale(15), 
    color : '#95A5A6'
  }
})

export default SideMenuScreen;