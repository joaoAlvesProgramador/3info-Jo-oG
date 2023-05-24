import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { db } from "../config/Firebase";
import styles from "../utils/styles";

export default function IncluirPessoa() {
  const [NomeFruta, setNomeDaFruta] = useState("");

  /**
   * Create a funcion to inser a person inside Firestore
   *
   */
  async function inserirPessoa() {
    try {
      const frutaRef = collection(db, "Fruta");
      const payload = {
        NomeFruta: NomeFruta,
      };
      const fruta = await addDoc(frutaRef, payload);
      console.log(fruta);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={{alignItems:'center', }}>
    <View style={styles.header}> 
        <Text style={{ fontSize: 30 , marginBottom:10, textAlign:'center', }}>Adicionar Fruta</Text>
    </View>  

      <TextInput 
      style={styles.input}
      label="Nome da Fruta" 
      value={NomeFruta} 
      onChangeText={setNomeDaFruta} 
      />

      <Button
      style={{ marginTop: 10, }}
       onPress={inserirPessoa}
       mode="contained"
       buttonColor="#88f"
       >Inserir esta bela pessoa!</Button>
    </View>
  );
}


