import { StyleSheet, Pressable, ImageBackground } from "react-native";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";

export function DonationCard() {
  return (
    <ThemedView style={styles.cardWrapper}>
      <ImageBackground
        source={require("@/assets/images/icons/donationCard.png")}
        style={styles.container}
        resizeMode="contain"
      >
        <ThemedText style={styles.heading}>
          Help other Jews illuminate their lives by studying the Torah
        </ThemedText>

        <Pressable style={styles.shareButton}>
          <ThemedText style={styles.shareButtonText}>Share Shiurim</ThemedText>
        </Pressable>

        <Pressable style={styles.donationButton}>
          <ThemedText style={styles.donationButtonText}>Donation</ThemedText>
        </Pressable>
      </ImageBackground>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    width: "100%",
    height: 500,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 32,
    overflow: "hidden",
  },
  heading: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 40,
    lineHeight: 36,
    fontFamily: "Poppins",
    paddingHorizontal: 20,
  },
  shareButton: {
    backgroundColor: "#F15223",
    borderRadius: 30,
    paddingVertical: 16,
    width: "80%",
    alignItems: "center",
    marginBottom: 16,
  },
  shareButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Poppins",
  },
  donationButton: {
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 30,
    paddingVertical: 16,
    width: "80%",
    alignItems: "center",
  },
  donationButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Poppins",
  },
});
