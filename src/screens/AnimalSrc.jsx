import { View } from "react-native";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Text, TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import { FlatList } from "react-native-web";
import { db } from "../config/Firebase";
import styles from "../utils/styles";

export default function AnimalSrc() {
  const [Animal, setAnimal] = useState([]);
  const [nomeAnimal, setNomeAnimal] = useState("");

  async function queryAnimal(nomeAnimal = null) {
    try {
      const animalRef = collection(db, "Animal");
      const queryAnimal = query(
        animalRef,
        where("NomeAnimal", "==", nomeAnimal)
      );
      const querySnapshot = await getDocs(queryAnimal);
      
      const animais = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        animais.push(data);
      });
      
      setAnimal(animais);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    queryAnimal(nomeAnimal);
  }, [nomeAnimal]);

  return (
    <View style={{ paddingTop: 100, alignItems:'center',}}>
      <Text style={{ textAlign: "center", paddingBottom: 10, fontSize: 30, }}>Buscar Animal</Text> {/* Cachorro */}
      <TextInput
      style={styles.input}
        label="Nome do Animal"
        value={nomeAnimal}
        onChangeText={setNomeAnimal}
      />
      <FlatList
        data={Animal}
        renderItem={({ item }) => <Text>{item.NomeAnimal}</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
