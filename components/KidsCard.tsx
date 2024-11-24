import React from "react";
import { StyleSheet, Image, FlatList } from "react-native";

import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";

const data = [
  {
    id: "1",
    title: "Moises",
    description: "The story of",
    sessions: "43 sessions",
    image: require("@/assets/images/icons/moses.png"),
  },
  {
    id: "2",
    title: "Exodus",
    description: "The Exodus from Egypt",
    sessions: "21 sessions",
    image: require("@/assets/images/icons/exodus.png"),
  },
];

interface cardItem {
  id: string;
  title: string;
  description: string;
  sessions: string;
  image: any;
}

export function KidsCard() {
  const renderItem = ({ item }: { item: cardItem }) => (
    <ThemedView style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <ThemedView style={styles.detailsContainer}>
        <ThemedText style={styles.subHeaderText}>{item.title}</ThemedText>
        <ThemedText style={styles.description}>{item.description}</ThemedText>
        <ThemedView style={styles.bottomSection}>
          <ThemedView style={styles.infoContainer}>
            <Image
              source={require("@/assets/images/icons/bookMark.png")}
              style={styles.icon}
            />
            <ThemedText style={styles.infoText}>{item.sessions}</ThemedText>
          </ThemedView>
          <ThemedView style={styles.actionContainer}>
            <ThemedText style={styles.actionText}>Read</ThemedText>
            <Image
              source={require("@/assets/images/icons/arrowOrange.png")}
              style={styles.icon}
            />
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText style={styles.title}>Kids</ThemedText>
        <ThemedText style={styles.view}>View more</ThemedText>
      </ThemedView>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ListEmptyComponent={null}
        nestedScrollEnabled={true}
        scrollEnabled={false}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    paddingVertical: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  title: {
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: 20,
    color: "#000000",
  },
  view: {
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: 14,
    color: "#5E626C",
  },
  list: {
    paddingHorizontal: 20,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginBottom: 16,
  },
  cardImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderRadius: 12,
    resizeMode: "contain",
  },
  detailsContainer: {
    flex: 2,
    paddingLeft: 16,
  },
  subHeaderText: {
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: 18,
    color: "#333333",
    marginBottom: 4,
  },
  description: {
    fontFamily: "Poppins",
    fontWeight: "400",
    fontSize: 14,
    color: "#5E626C",
    marginBottom: 12,
  },
  bottomSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoText: {
    fontFamily: "Poppins",
    fontWeight: "400",
    fontSize: 14,
    color: "#333333",
    marginLeft: 8,
  },
  actionContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionText: {
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: 14,
    color: "#F15223",
    marginRight: 8,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
});
