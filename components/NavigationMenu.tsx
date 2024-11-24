import { StyleSheet, Pressable } from "react-native";
import { Download, Bell, Star, Clock } from "lucide-react-native";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";

export default function NavigationMenu() {
  return (
    <ThemedView style={styles.container}>
      <Pressable style={styles.menuItem}>
        <ThemedView style={styles.iconContainer}>
          <Download size={24} color="#0A1445" />
        </ThemedView>
        <ThemedText style={styles.activeText}>Download</ThemedText>
      </Pressable>

      <Pressable style={styles.menuItem}>
        <ThemedView style={styles.iconContainer}>
          <Bell size={24} color="#6B7280" />
        </ThemedView>
        <ThemedText style={styles.inactiveText}>Routine</ThemedText>
      </Pressable>

      <Pressable style={styles.menuItem}>
        <ThemedView style={styles.iconContainer}>
          <Star size={24} color="#6B7280" />
        </ThemedView>
        <ThemedText style={styles.inactiveText}>Favorites</ThemedText>
      </Pressable>

      <Pressable style={styles.menuItem}>
        <ThemedView style={styles.iconContainer}>
          <Clock size={24} color="#6B7280" />
        </ThemedView>
        <ThemedText style={styles.inactiveText}>Recents</ThemedText>
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#FFFFFF",
    width: "100%",
  },
  menuItem: {
    alignItems: "center",
    gap: 8,
  },
  iconContainer: {
    width: 64,
    height: 64,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  activeText: {
    fontSize: 14,
    color: "#0A1445",
    fontFamily: "Poppins-Medium",
  },
  inactiveText: {
    fontSize: 14,
    color: "#6B7280",
    fontFamily: "Poppins-Medium",
  },
});
