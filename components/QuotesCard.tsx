import { StyleSheet, Image, Dimensions, ImageBackground } from "react-native";

import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import React from "react";

export function QuotesCard() {
  const width = Dimensions.get("window").width;

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.card}>
        <ImageBackground
          source={require("@/assets/images/icons/quotesContainer.png")}
          style={styles.quotesImageContainer}
          resizeMode="contain"
        >
          <Image
            source={require("@/assets/images/icons/quotes.png")}
            style={styles.icon}
          />
          <ThemedText style={styles.cardText}>
            In that era, there will be neither famine or war, envy or
            competition, for good will flow in abundance and all the
            delightswill be freely available as dust. The occupation of the
            entire world will be solerly to know G-d.
          </ThemedText>
          <ThemedText style={styles.cardBottomText}>- Mishneh Tarah</ThemedText>
        </ImageBackground>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#EBF0F1",
  },
  icon: {
    width: 36,
    height: 36,
    marginBottom: 10,
  },
  card: {
    width: "90%",
    padding: 20,
    margin: 20,
    borderRadius: 20,
    backgroundColor: "#fff",
  },
  cardText: {
    fontFamily: "Prata",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 26,
    color: "rgba(0, 0, 0, 0.7)",
  },
  cardBottomText: {
    fontFamily: "Prata",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 55,
    color: "#000000",
  },
  quotesImageContainer: {
    width: "100%",
    height: "auto",
  },
});
