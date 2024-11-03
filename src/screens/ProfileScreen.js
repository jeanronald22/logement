import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Card, Text, Button, Divider } from "react-native-paper";

const ProfileScreen = ({ navigation }) => {
  const handleEditProfile = () => {
    // Naviguer vers l'écran de modification du profil
    navigation.navigate("EditProfile");
  };

  const handleLogout = () => {
    // Gérer la déconnexion
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content style={styles.content}>
          <Avatar.Image size={100} source={require("../assets/profile.jpeg")} />
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.email}>john.doe@example.com</Text>
          <Divider style={styles.divider} />
          <View style={styles.infoSection}>
            <Text style={styles.label}>Position:</Text>
            <Text style={styles.info}>Software Engineer</Text>
          </View>
          <View style={styles.infoSection}>
            <Text style={styles.label}>Company:</Text>
            <Text style={styles.info}>Tech Solutions Ltd</Text>
          </View>
          <Button
            mode="contained"
            style={styles.button}
            onPress={handleEditProfile}
          >
            Modifier le profil
          </Button>
          <Button mode="outlined" style={styles.button} onPress={handleLogout}>
            Se déconnecter
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#f4f4f4",
  },
  card: {
    padding: 20,
    borderRadius: 10,
  },
  content: {
    alignItems: "center",
  },
  name: {
    marginTop: 15,
    fontSize: 24,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
    color: "#666",
    marginVertical: 5,
  },
  divider: {
    marginVertical: 15,
    width: "100%",
  },
  infoSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
  },
  info: {
    fontSize: 16,
    marginLeft: 10,
    color: "#333",
  },
  button: {
    marginTop: 15,
    width: "100%",
  },
});

export default ProfileScreen;
