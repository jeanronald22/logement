import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { colors } from "../styles/colors";
import { favorites } from "../database/datas";

const Propriete = ({
  imgUrl,
  title,
  price,
  available,
  etoile,
  description,
  obj,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const addToFavorites = (item) => {
    if (!favorites.includes(item)) {
      favorites.push(item);
    } else {
      favorites.splice(favorites.indexOf(item), 1);
    }
    setIsSelected(!isSelected);
  };
  return (
    <View style={styles.card}>
      <Image source={imgUrl} alt={title} style={styles.img} />
      <Pressable
        onPress={() => addToFavorites(obj)}
        style={{ position: "absolute", right:'6%', top: 20 }}
      >
        {isSelected ? (
          <MaterialIcons name="favorite" size={30} color={colors.bleuClaire} />
        ) : (
          <MaterialIcons name="favorite-border" size={30} color={"white"} />
        )}
      </Pressable>

      <View style={styles.title}>
        <Text style={styles.titleContent}>{title}</Text>
        <View
          style={[
            styles.titleContent,
            {
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            },
          ]}
        >
          <MaterialIcons name="star" color="black" size={30} />
          <Text
            style={{ fontSize: 18, fontWeight: "bold", paddingHorizontal: 10 }}
          >
            {etoile}
          </Text>
        </View>
      </View>
      <Text style={{ fontSize: 16, color: colors.gris }}>{description}</Text>
      <Text style={{ fontSize: 16, color: colors.gris }}>
        {available ? "Disponible" : "Indisponible"}
      </Text>
      <Text style={styles.titleContent}>${price}</Text>
    </View>
  );
};

export default Propriete;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    width: "95%",
  },
  img: {
    width: "100%",
    height: 250,
    borderRadius: 15,
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    alignItems: "center",
  },
  titleContent: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});
