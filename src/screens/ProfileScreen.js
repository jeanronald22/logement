import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../styles/colors'
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const ProfileScreen = () => {
  return (
    <View style={styles.conatiner}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "white",
          padding: 20,
        }}
      >
        Profile
      </Text>
      <View style={styles.conatine}>
        <View style={ {backgroundColor:'red'}}>
          <MaterialIcons
            name="person-2"
            size={50}
            color={colors.gris}
          />
        </View>
      </View>
    </View>
  );
}

export default ProfileScreen

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: colors.bleuFonce,
    alignItems: 'center',
    paddingTop:50
  },
  conatine: {
    backgroundColor: 'white', 
    width: '100%',
    flex:1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: 'center',
    paddingVertical:10
  }
})