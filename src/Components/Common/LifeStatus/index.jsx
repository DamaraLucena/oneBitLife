import React from "react";
import { View, StyleSheet } from "react-native";

import Lottie from "lottie-react-native";

export default function LifeStatus() {
  /* Status:
    100 - Máximo
    50 - Médio
    25 - Baixo
    00 - Curto (Game Over)
    No robô, nós temos primeiro felicidade e depois saúde xx-xx
  */

  return(
    <View style={styles.container}>
      <Lottie source={require("../../../assets/education/education-100.json")} autoPlay loop style={styles.educationAnimation}/>
      <Lottie source={require("../../../assets/money/money-100.json")} autoPlay loop style={styles.financeAnimation}/>
      <Lottie source={require("../../../assets/robot/robot-100-100.json")} autoPlay loop style={styles.robotAnimation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
  },

  robotAnimation: {
    width: 190,
    marginTop: 25,
    marginLeft: 25,
  },

  educationAnimation: {
    width: 100,
    marginTop: 50,
    marginLeft: 5,
    position: "absolute",
  },

  financeAnimation: {
    width: 100,
    marginTop: 50,
    marginLeft: 95,
    position: "absolute",
  },
})