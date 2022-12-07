import React from "react";
import { View, ScrollView, Text, StyleSheet} from "react-native";
import DefaultButton from "../../Components/Common/DefaultButton";
import ExplanationCard from "../../Components/Explanation/ExplanationCard";

export default function AppExplanation(){

  function handleSetShowHome(){
    console.log("Botão clicando");
  }

  return(
    <View style={style.container}>
      <ScrollView>
        <View style={{ alignItems: "center"}}>
          <Text style={style.title}>
            Antes, deixa-me{"\n"} te explicar...
          </Text>
          <ExplanationCard/>
          <Text style={style.descriptionCta}>
            Pronto(a) para atualizar sua vida?
          </Text>
          <Text style={style.description}>
            Na próxima tela você poderá selecionar {"\n"}seus 4 hábitos individualmente.
          </Text>
          <DefaultButton 
            buttonText={"Continuar"}
            handlePress={handleSetShowHome}
            width={200}
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
    backgroundColor: "#151515fa", 
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginVertical: 20,
    marginTop: 30,
  },
  descriptionCta:{
    color:"#ffffff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 10,
    marginTop: 10,
    marginBottom: 30,
  },
  description: {
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 10,
    marginTop: 10,
    marginBottom: 30,
  },
})