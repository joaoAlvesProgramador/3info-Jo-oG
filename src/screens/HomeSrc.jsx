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
     <View style={styles.header}> 
      <Text style={{ fontSize: 30 , marginBottom:10, }}>Página Inicial</Text>
     </View>  

      <View style={styles.boxP}>
        <Text style={styles.textH}>
          Pesquise seus produtos
        </Text>
        <TouchableOpacity style={styles.theme} onPress={() => navigation.navigate("Produtos")}>
          Produtos
        </TouchableOpacity>
        <TouchableOpacity style={styles.theme} onPress={() => navigation.navigate("Cores")}>
          Cores
        </TouchableOpacity>
        <TouchableOpacity style={styles.theme} onPress={() => navigation.navigate("Animais")}>
          Animais
        </TouchableOpacity>
        <TouchableOpacity style={styles.theme} onPress={() => navigation.navigate("Frutas")}>
          Frutas
        </TouchableOpacity>
        <TouchableOpacity style={styles.theme} onPress={() => navigation.navigate("Pessoas")}>
          Pessoas
        </TouchableOpacity>
        <TouchableOpacity style={styles.theme} onPress={() => navigation.navigate("Carros")}>
          Carros
        </TouchableOpacity>
      </View>

    </View>
  );
}
