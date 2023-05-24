import { View } from "react-native";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Text, TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import { FlatList } from "react-native-web";
import { db } from "../config/Firebase";
import styles from "../utils/styles";

export default function PessoaSrc() {
  const [Pessoa, setPessoa] = useState([]);
  const [nomePessoa, setNomePessoa] = useState("");

  async function queryPessoa(nomePessoa = null) {
    try {
      const pessoaRef = collection(db, "Pessoa");
      const queryPessoa = query(
        pessoaRef,
        where("NomePessoa", "==", nomePessoa)
      );
      const querySnapshot = await getDocs(queryPessoa);

      const pessoas = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        pessoas.push(data);
      });

      setPessoa(pessoas);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    queryPessoa(nomePessoa);
  }, [nomePessoa]);

  return (
    <View style={{ alignItems: "center" }}>
      <View style={styles.header}> 
        <Text style={{ fontSize: 30 ,  textAlign:'center', }}>Buscar Pessoa</Text>
    </View>
      <TextInput
        style={styles.input}
        label="Nome da Pessoa"
        value={nomePessoa}
        onChangeText={setNomePessoa}
      />
      <FlatList
        data={Pessoa}
        renderItem={({ item }) => (
          <Text key="item.id">{item.NomePessoa}</Text>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
