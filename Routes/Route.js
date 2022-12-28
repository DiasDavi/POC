import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { Home } from "../src/Pages/Home/Home";
import { Calendar } from "../src/Pages/Calendar/Calendar";




function CameraScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Camera!</Text>
    </View>
  );
}

function AlertScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Alertas!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function RouteNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        title: false,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          backgroundColor: "#fff",
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="home"
              size={50}
              color={focused ? "#173353" : "grey"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="calendar"
              size={50}
              color={focused ? "#173353" : "grey"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="camera"
              size={50}
              color={focused ? "#173353" : "grey"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Alertas"
        component={AlertScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="bell"
              size={50}
              color={focused ? "#173353" : "grey"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="gear"
              size={50}
              color={focused ? "#173353" : "grey"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#173353",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
});
