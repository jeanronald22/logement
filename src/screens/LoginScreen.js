import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { colors } from '../styles/colors';


const LoginScreen = ({navigation}) => {
  //definition des states
  const [selected1, setSelected1] = useState(false)
  const [selected2, setSelected2] = useState(false);
  const navigate = () => {
    navigation.replace('tabs')
  }
  return (
    <View>
      {/* defintion du titre */}
      <View style={styles.textContainer}>
        <Text style={styles.textheader}>
          Ready to find your dreams house...
        </Text>
      </View>
      {/* definition de l'image */}
      <View style={styles.containerImage}>
        <Image
          source={require("../assets/w.png")}
          style={styles.image}
          alt="image de bienvenue"
        />
      </View>
      {/* definition des button */}
      <View style={styles.btnContainer}>
        <Pressable style={[styles.btn, { backgroundColor: colors.bleuFonce, }, selected1 ? styles.click : null]}
          onPressIn={() => setSelected1(true)}
          onPressOut={() => setSelected1(false)}
          onPress={navigate}
        >
          <Text style={styles.textBtn}>Sing Up</Text>
        </Pressable>
        <Pressable
          style={[
            styles.btn,
            { borderColor: colors.grisClair, borderWidth: 1 },
          ]}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: colors.bleuClaire,
            }}
          >
            Login
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default LoginScreen

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode:'cover'

  },
  containerImage: {
    //backgroundColor: 'green',
    height: "40%",
    width: '100%',
    //justifyContent: 'center',
    alignContent:'center'
    
  },
  textContainer: {
    //backgroundColor: 'red',
    height: '30%',   
    marginTop: 30,
    paddingVertical: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnContainer: {
    //backgroundColor: 'red',
    height: "30%",
    alignItems: 'center',
  },
  btn: {
    //backgroundColor: 'green',
    width: '70%',
    height: 50,
    marginVertical: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  textheader: {
    fontSize: 50,
    color:colors.bleuClaire
  },
  click: {
    opacity:0.5
    
  }
});