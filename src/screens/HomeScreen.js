import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../styles/colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Propriete from "../components/Propriete";
import { properties, favorites } from "../database/datas";
const HomeScreen = ({ navigation }) => {
  //definition des states
  const [query, setQuery] = useState("");
  const [isSelected, setIselected] = useState(false);

  const renderProperties = ({ item }) => {
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
    <View style={styles.container}>
      {/* definition de la barre de recherche */}
      <View style={styles.SearchCOntainer}>
        <MaterialIcons
          name="search"
          size={35}
          color={colors.gris}
          style={styles.icon}
        />
        <TextInput
          placeholder="Recherher un logement..."
          onChangeText={(text) => setQuery(text)}
          style={styles.search}
        />
      </View>

      {/* liste des logements */}
      <View
        style={{
          width: "100%",
          flex: 1,
          alignItems: "center",
        }}
      >
        <FlatList
          data={properties.filter((propriete) =>
            propriete.title.toLowerCase().includes(query.toLowerCase())
          )}
          //keyExtractor={(propriete) => propriete.id}
          renderItem={renderProperties}
          style={{
            width: "100%",
            marginBottom: 10,
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
  },
  SearchCOntainer: {
    //backgroundColor: "red",
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 3,
    alignItems: "center",
  },
  search: {
    width: "90%",
    paddingVertical: 15,
    paddingRight: 10,
    paddingLeft: 50,
    backgroundColor: colors.inputBg,
    borderRadius: 10,
    color: colors.gris,
  },
  icon: {
    position: "absolute",
    left: 30,
    top: 22,
    zIndex: 1,
  },
  press: {
    opacity: 0.5,
  },
});
