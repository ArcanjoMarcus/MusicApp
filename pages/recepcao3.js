import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import * as Font from "expo-font";
import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CirculoRosaPartido, TrianguloVermelho } from "../assets/QuadradoRosa";

export default function Recepcao3({ navigation }) {
  const [isLoaded, setLoading] = useState(false);

  async function carregaFontes() {
    await Font.loadAsync({
      Sniglet: require("../assets/fonts/Sniglet-Regular.ttf"),
      Offside: require("../assets/fonts/Offside-Regular.ttf"),
    });
    await setLoading(true);
  }

  carregaFontes();

  if (isLoaded) {
    return (
      <View style={styles.container}>
        <CirculoRosaPartido style={styles.quadradoRosa} />
        <Text style={styles.texto}>
          Já parou para pensar o que é harmonia? Essa coisa tão abstrata,
          simplesmente mística às vezes.
        </Text>
        <Pressable style={styles.botao}>
          <Text style={styles.txtBotao}>Começar</Text>
        </Pressable>
      </View>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252424",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontFamily: "Sniglet",
    fontSize: 18,
    color: "#FFFFFF",
  },
  botao: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F9F36A",
    borderRadius: 10,
    height: 35,
    width: 170,
    top: 200,
  },
  texto: {
    textAlign: "center",
    fontFamily: "Offside",
    color: "#FFFFFF",
    width: 220,
    fontSize: 13,
    height: 70,
    top: 58,
  },
  txtBotao: {
    fontFamily: "Offside",
    fontSize: 14,
  },
  quadradoRosa: {},
});
