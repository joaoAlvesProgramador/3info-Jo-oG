import { View } from "react-native";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Text, TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import { FlatList } from "react-native-web";
import { db } from "../config/Firebase";
import styles from "../utils/styles";

export default function CorSrc() {
  const [Cor, setCor] = useState([]);
  const [nomeCor, setNomeCor] = useState("");

  async function queryCor(nomeCor = null) {
    try {
      const corRef = collection(db, "Cor");
      const queryCor = query(
        corRef,
        where("NomeCor", "==", nomeCor)
      );
      const querySnapshot = await getDocs(queryCor);
      
      const cores = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        cores.push(data);
      });
      
      setCor(cores);
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    queryCor(nomeCor);
  }, [nomeCor]);

  return (
    <View style={{  alignItems:'center',}}>
      <View style={styles.header}> 
        <Text style={{ fontSize: 30 ,  textAlign:'center', }}>Buscar Cor</Text>
    </View>
      <TextInput
      style={styles.input}
        label="Nome da Cor"
        value={nomeCor}
        onChangeText={setNomeCor}
      />
      
      <FlatList
        data={Cor}
        renderItem={({ item }) => (
          <Text key={item.id}>{item.NomeCor}</Text>
        )}
        // keyExtractor={(item) => item.id}
      />
    </View>
  );
}
