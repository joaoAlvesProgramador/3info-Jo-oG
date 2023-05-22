import { View } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import styles from "../utils/styles";

export default function Splash({ navigation }) {
  setTimeout(() => {
    navigation.navigate("TabsNavigator");
  }, 300);
  return (
    <View style={styles.container}>
      <ActivityIndicator />
      <Text style={styles.text}>Aguarde um Minuto...</Text>
    </View>
  );
}
