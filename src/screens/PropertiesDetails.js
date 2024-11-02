import { StyleSheet, Image, View, Text, Pressable } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {colors} from '../styles/colors'
const PropertiesDetails = ({ navigation, route }) => {
  const params = route.params.item;
  console.log(params);

  return (
    <View>
      {/* definition du header */}
      <View style={styles.ContainerImage}>
        <Image source={params.photos[1]} alt="image 2" style={styles.image} />
        <MaterialIcons name="arrow-back-ios" size={30} color={"white"} style={ {position:"absolute", top:50, left:22}} onPress={()=>navigation.goBack()}/>
      </View>
      <View style={{ justifyContent: "center", marginTop: 10 }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
        >
          {params.title}
        </Text>
        <View style={{ flexDirection: "row", justifyContent:'center' }}>
          <View style={styles.flex}>
            <MaterialIcons name="location-on" size={24} color={colors.gris} />
            <Text style={{ marginHorizontal: 5 }}>{params.location.city}</Text>
          </View>
          <View style={styles.flex}>
            <MaterialIcons name="price-change" size={24} color={colors.gris} />
            <Text style={{ marginHorizontal: 5 }}>{params.price}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent:'center' }}>
          <View style={styles.flex}>
            <MaterialIcons name="bed" size={24} color={colors.gris} />
            <Text style={{ marginHorizontal: 5 }}>
              {params.features.bathrooms}
            </Text>
          </View>
          <View style={styles.flex}>
            <MaterialIcons name="bed" size={24} color={colors.gris} />
            <Text style={{ marginHorizontal: 5 }}>{params.features.area}</Text>
          </View>
        </View>
        {/* desscription */}
        <Text style={ {textAlign:'center', fontSize:16}}>{params.description}</Text>
        <Pressable style={ styles.btn}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
            <MaterialIcons name="add" size={24} color={"white"} />
            <Text style={ {color:'white', fontWeight:'bold', fontSize:18, marginLeft:5}}>Shedule a visit</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default PropertiesDetails;

const styles = StyleSheet.create({
  ContainerImage: {
    width: "100%",
    height: 450,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical:5
  },
  btn: {
    backgroundColor: colors.bleu,
    width: "80%",
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 10,
    marginTop:50
  }
});
