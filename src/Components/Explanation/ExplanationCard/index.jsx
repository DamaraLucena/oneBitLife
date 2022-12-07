import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function ExplanationCard(){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Com este aplicativo, você solidificará 4 hábitos de áreas essenciais: 
      </Text>
      <View style={styles.explanationContainer}>
        <Image source={require("../../../assets/icons/educationIcon.png")}
        style={styles.icon}/>

        <Text style={styles.description}>
          <Text style={styles.mind}> Mente: </Text>
          Hábitos para melhorar sua inteligência/sabedoria
        </Text>
      </View>

      <View style={styles.explanationContainer}>
        <Image source={require("../../../assets/icons/moneyIcon.png")}
        style={styles.icon}/>

        <Text style={styles.description}>
          <Text style={styles.money}> Financeiro: </Text>
          Hábitos para te ajudar com controle financeiro.
        </Text>
      </View>

      <View style={styles.explanationContainer}>
        <Image source={require("../../../assets/icons/bodyIcon.png")}
        style={styles.icon}/>

        <Text style={styles.description}>
          <Text style={styles.body}> Corpo: </Text>
          Hábitos para te deixar mais saudável e forte.
        </Text>
      </View>

      <View style={styles.explanationContainer}>
      <Image source={require("../../../assets/icons/funIcon.png")}
      style={styles.icon}/>

      <Text style={styles.description}>
        <Text style={styles.fun}> Humor: </Text>
        Hábitos para te deixar mais saudável e forte.
      </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#151515fa",
    width: 360,
    borderRadius: 25,
    padding: 30,
  },
  title: {
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 12,
  },
  explanationContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  icon: {
    width: 30,
    height: 40,
    marginRight:5,
  },
  mind: {
    color: "#90b7e3",
    fontWeight: "bold",
  },
  money: {
    color: "#85bb65",
    fontWeight: "bold",
  },
  body: {
    color: "#ff0044",
    fontWeight: "bold",
  },
  fun: {
    color: "#fe7f23",
    fontWeight: "bold",
  },
  description: {
    color: "#ffffff",
    fontSize: 10,
    fontStyle: "italic",
  },
});