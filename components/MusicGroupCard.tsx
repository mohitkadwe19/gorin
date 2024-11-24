import React from "react";
import { StyleSheet, Image, FlatList, View } from "react-native";

import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";

const data = [
  {
    id: "1",
    title: "Calm Jewish ",
    description: "to relax",
    sessions: "43 sessions",
    image: require("@/assets/images/icons/relaxing.png"),
  },
  {
    id: "2",
    title: "Chabod Ni...",
    description: "chabad music",
    sessions: "43 sessions",
    image: require("@/assets/images/icons/sunset.png"),
  },
];

interface cardItem {
  id: string;
  title: string;
  description: string;
  sessions: string;
  image: any;
}

export function MusicGroupCard() {
  const renderItem = ({ item }: { item: cardItem }) => (
    <ThemedView style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <ThemedView style={styles.detailsContainer}>
        <ThemedView style={styles.bottomSection}>
          <Image
            source={require("@/assets/images/icons/music.png")}
            style={styles.musicIcon}
          />
          <ThemedText style={styles.subHeaderText}>{item.title}</ThemedText>
        </ThemedView>
        <ThemedText style={styles.description}>{item.description}</ThemedText>
        <ThemedView style={[styles.bottomSection, styles.leftAligned]}>
          <ThemedView style={styles.infoContainer}>
            <Image
              source={require("@/assets/images/icons/bookMark.png")}
              style={styles.icon}
            />
            <ThemedText style={styles.infoText}>{item.sessions}</ThemedText>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText style={styles.title}>Nigunim</ThemedText>
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
    flex: 1,
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  card: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 16,
    margin: 8,
    borderRadius: 12,
  },
  cardImage: {
    width: "80%",
    height: 120,
    borderRadius: 12,
    resizeMode: "contain",
    marginBottom: 12,
  },
  detailsContainer: {
    alignItems: "flex-start",
  },
  subHeaderText: {
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: 18,
    color: "#333333",
    marginBottom: 4,
    textAlign: "left",
  },
  description: {
    fontFamily: "Poppins",
    fontWeight: "300",
    fontSize: 14,
    color: "#5E626C",
    marginBottom: 12,
    textAlign: "left",
    lineHeight: 20,
  },
  bottomSection: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  leftAligned: {
    justifyContent: "flex-start",
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
  musicIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginRight: 8,
  },
});
