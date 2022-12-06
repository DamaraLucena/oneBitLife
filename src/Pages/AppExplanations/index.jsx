import React from "react";
import { View } from "react-native";
import { ScrollView, Text, StyleSheet } from "react-native-gesture-handler";

export default function AppExplanations(){

  function handleSetShowHome(){
    console.log("Botão clicando");
  }

  return(
    <View style={style.container}>
      <ScrollView>
        <View style={{ alignItems: "center"}}>
          <Text style={style.title}>
            Antes, deixa-me te explicar...
          </Text>
          <Text style={style.descriptionsCta}>
            Pronto(a) para atualizar sua vida?
          </Text>
          <Text style={style.descriptions}>
            Na próxima tela você poderá selecionar seus 4 hábitos individualmente.
          </Text>
          <DefaultButton 
            buttonText={"Continuar"}
            handlePress={handleSetShowHome}
            width={250}
            height={50}
          />

        </View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba (21, 21, 21, 0.98)",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 40,
  },
  descriptionsCta:{
    color:"white",
    fontWeight: "bold",
    fontSize: 12,
    marginTop: 20,
    marginBottom: 10,
  },
  descriptions: {
    color: "white",
    textAlign: "center",
    marginBottom: 30,
  },

})