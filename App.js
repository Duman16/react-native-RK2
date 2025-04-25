import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FavoritesProvider } from "./src/context/FavoritesContext";
import HomeScreen from "./src/screens/HomeScreen";
import NewsDetailScreen from './src/screens/NewsDetailScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack(){
  return (
    <Stack.Navigator>
        <Stack.Screen name="NewsList" component={HomeScreen} options={{ title: "Последние новости" }} />
        <Stack.Screen name="Detail" component={NewsDetailScreen} options={{ title: "Подробности" }} />
    </Stack.Navigator>
);
}

export default function App() {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions = {({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if (route.name === "Home") {
                iconName = focused ? "newspaper" : "newspaper-outline";
              } else if (route.name === "Favorites") {
                iconName = focused ? "heart" : "heart-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray", 
          })}
          >
            <Tab.Screen name="Home" component={HomeStack} options={{headerShown: false}} />
            <Tab.Screen name="Favorites" component={FavoritesScreen} />
          </Tab.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
  );
};
