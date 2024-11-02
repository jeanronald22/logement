import { FlatList, StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import { favorites } from "../database/datas";
import Propriete from "../components/Propriete";

const FavoriteScreen = ({ navigation }) => {
  const [isSelected, setIselected] = useState(false);
  const renderFav = ({ item }) => {
    return (
      <Pressable
        onPress={() => navigation.navigate("Details Propriete", { item })}
        onPressIn={() => setIselected(true)}
        onPressOut={() => setIselected(false)}
        style={isSelected ? styles.press : null}
      >
        <Propriete
          imgUrl={item.photos[0]}
          title={item.title}
          price={item.price}
          etoile={3}
          available={item.available}
          description={item.description}
          obj={item}
        />
      </Pressable>
    );
  };
  return (
    <View
      style={{
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList
        data={favorites}
        renderItem={renderFav}
        style={{ width: "100%" }}
      />
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  press: {
    opacity: 0.5,
  },
});
