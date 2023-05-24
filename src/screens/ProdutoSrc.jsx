import { View } from "react-native";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Text, TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { db } from "../config/Firebase";
import styles from "../utils/styles";

export default function ProdutoSrc() {
  const [Produto, setProduto] = useState([]);
  const [NomeDoProduto, setNomeDoProduto] = useState("");

  async function queryProdutos(NomeDoProduto = null) {
    try {
      const ProdutoRef = collection(db, "Produto");
      const queryProduto = query(
        ProdutoRef,
        where("NomeProduto", "==", NomeDoProduto)
      );
      const querySnapshot = await getDocs(queryProduto);

      const Produto = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        Produto.push(data);
      });

      setProduto(Produto);
      console.log(Produto);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    queryProdutos(NomeDoProduto);
  }, [NomeDoProduto]);

  return (
    <View style={{ alignItems: "center" }}>
      <View style={styles.header}> 
        <Text style={{ fontSize: 30 ,  textAlign:'center', }}>Buscar Produto</Text>
    </View>
      {/* abacaxi */}
      <TextInput
        style={styles.input}
        label="Nome do Produto"
        value={NomeDoProduto}
        onChangeText={setNomeDoProduto}
      />
      <FlatList
        data={Produto}
        renderItem={({ item }) => (
          <Text key={item.id}>{item.NomeProduto}</Text>
        )}
        // keyExtractor={(item) => item.id}
      />
    </View>
  );
}
