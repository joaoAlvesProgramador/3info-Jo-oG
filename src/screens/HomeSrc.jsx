import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { TouchableOpacity } from "react-native-web";
import styles from "../utils/styles";


export default function HomeSrc({ navigation }) {
  return (
    <View
      style={{
        textAlign: "center",
        alignItems:'center',
        backgroundColor:'#E7E7E7',
        height: '100%',
      }}
    >
     <View style={styles.headerH}> 
      <Text style={{ fontSize: 30 , marginBottom:10, }}>Página Inicial</Text>
     </View>  

      <View style={styles.boxP}>
        <Text style={styles.textH}>
        <Text> Pesquise seus produtos </Text>
        </Text>
        <TouchableOpacity style={styles.theme} onPress={() => navigation.navigate("Produtos")}>
        <Text> Produtos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.theme} onPress={() => navigation.navigate("Cores")}>
        <Text> Cores</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.theme} onPress={() => navigation.navigate("Animais")}>
        <Text> Animais</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.theme} onPress={() => navigation.navigate("Frutas")}>
        <Text>  Frutas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.theme} onPress={() => navigation.navigate("Pessoas")}>
        <Text> Pessoas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.theme} onPress={() => navigation.navigate("Carros")}>
        <Text> Carros</Text>
        </TouchableOpacity>
        
      </View>

      {/* Adicionei */}

      <View style={styles.boxA}>
        <Text style={styles.textH}>
          Adicione seus produtos
        </Text>
        <TouchableOpacity style={styles.theme} onPress={() => navigation.navigate("Adicionar Frutas")}>
          <Text>Adicionar Frutas</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
