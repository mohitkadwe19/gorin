import { StyleSheet, Image } from "react-native";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";

export function Navbar() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.iconContainer}>
        <Image
          source={require("@/assets/images/logo/logo.png")}
          style={styles.icon}
          resizeMode="contain"
        />
        <ThemedView style={styles.notificationBadge}>
          <ThemedText style={styles.notificationText}>2</ThemedText>
        </ThemedView>
      </ThemedView>
      <Image
        source={require("@/assets/images/icons/menu.png")}
        style={styles.icon}
        resizeMode="contain"
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    marginTop: 56,
    backgroundColor: "#fff",
  },
  iconContainer: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
  },
  icon: {
    width: 26,
    height: 26,
  },
  notificationBadge: {
    position: "absolute",
    top: -6,
    right: -6,
    backgroundColor: "#F15223",
    borderRadius: 12,
    width: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
});
