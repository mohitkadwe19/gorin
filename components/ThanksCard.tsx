import { StyleSheet, Pressable, Image } from "react-native";

import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";

export function ThanksCard() {
  return (
    <ThemedView style={styles.thanksCard}>
      <ThemedText style={styles.specialThanks}>Special thanks</ThemedText>
      <ThemedText style={styles.recipientName}>
        to Yossi Mandy Lerman
      </ThemedText>
      <ThemedText style={styles.description}>
        thanks to his generous donation,{"\n"}
        we can stydy in "Shiurim" today.
      </ThemedText>
      <Pressable style={styles.readMoreButton}>
        <ThemedText style={styles.buttonText}>Read more</ThemedText>
        <Image
          source={require("@/assets/images/icons/arrow.png")}
          style={styles.buttonIcon}
        />
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  thanksCard: {
    width: "90%",
    padding: 24,
    backgroundColor: "#FFFFFF",
    borderRadius: 32,
    shadowColor: "#C0C4EA",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.45,
    shadowRadius: 30,
    elevation: 8,
    alignItems: "center",
    marginTop: 24,
    marginHorizontal: "5%",
  },
  specialThanks: {
    fontSize: 28,
    fontWeight: "600",
    color: "#F15223",
    marginBottom: 8,
    fontFamily: "Poppins",
    lineHeight: 32,
    textAlign: "center",
  },
  recipientName: {
    fontSize: 24,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 16,
    textAlign: "center",
    fontFamily: "Poppins",
    lineHeight: 28,
  },
  description: {
    fontSize: 16,
    color: "#666666",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 24,
    fontFamily: "Poppins",
  },
  readMoreButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F15223",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 24,
    width: "70%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    marginRight: 8,
    fontFamily: "Poppins",
  },
  buttonIcon: {
    width: 16,
    height: 16,
    resizeMode: "contain",
  },
});
