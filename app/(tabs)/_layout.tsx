import { Tabs } from "expo-router";
import React from "react";
import { Platform, StyleSheet, Image } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {
            backgroundColor: "white",
            borderTopWidth: 1,
            borderTopColor: "#eee",
          },
        }),
        tabBarInactiveTintColor: "#999",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("@/assets/images/logo/logo.png")}
              style={styles.tabIcon}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="closses"
        options={{
          title: "Closses",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("@/assets/images/icons/book.png")}
              style={styles.tabIcon}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="giving"
        options={{
          title: "Giving",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("@/assets/images/icons/group.png")}
              style={styles.tabIcon}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("@/assets/images/icons/profile.png")}
              style={styles.tabIcon}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabIcon: {
    width: 24,
    height: 24,
  },
});
