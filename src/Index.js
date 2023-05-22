import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeSrc from "./screens/HomeSrc";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "./screens/Splash";
import FrutaSrc from "./screens/FrutaSrc";
import CorSrc from "./screens/CorSrc";
import AnimalSrc from "./screens/AnimalSrc";
import PessoaSrc from "./screens/PessoaSrc";
import CarroSrc from "./screens/CarroSrc";
import ProdutoSrc from "./screens/ProdutoSrc";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            title: "Tela inicial",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TabsNavigator"
          component={TabsNavigator}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Tabs = createMaterialBottomTabNavigator();

function TabsNavigator() {
  return (
    <Tabs.Navigator
      barStyle={{ backgroundColor: "#000000" }}
      activeColor="#0084FF"
      inactiveColor="#FFFFFF"
    >
      <Tabs.Screen name="Home" component={HomeSrc} />
      <Tabs.Screen name="Produtos" component={ProdutoSrc} />
      <Tabs.Screen name="Cores" component={CorSrc} />
      <Tabs.Screen name="Animais" component={AnimalSrc} />
      <Tabs.Screen name="Frutas" component={FrutaSrc} />
      <Tabs.Screen name="Pessoas" component={PessoaSrc} />
      <Tabs.Screen name="Carros" component={CarroSrc} />
    </Tabs.Navigator>
  );
}
