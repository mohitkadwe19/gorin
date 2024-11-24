import React from "react";
import { StyleSheet, Image, FlatList } from "react-native";

import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";

const data = [
  {
    id: "1",
    title: "Lorem ipsum",
    description: "Lorem Ipsum is simply dummy text of the printing.",
    author: "by Rebba",
  },
  {
    id: "2",
    title: "Lorem ipsum",
    description: "Lorem Ipsum is simply dummy text of the printing.",
    author: "by Rebba",
  },
];

interface groupItem {
  id: string;
  title: string;
  description: string;
  author: string;
}

export function LiveGroupDiscussion() {
  const renderItem = ({ item }: { item: groupItem }) => (
    <ThemedView style={styles.card}>
      <ThemedView style={styles.subHeader}>
        <ThemedText style={styles.subHeaderText}>{item.title}</ThemedText>
        <Image
          source={require("@/assets/images/icons/live.png")}
          style={styles.icon}
        />
      </ThemedView>
      <ThemedText style={styles.description}>{item.description}</ThemedText>
      <ThemedView style={styles.bottomHeader}>
        <ThemedText style={styles.bottomHeaderText}>{item.author}</ThemedText>
        <Image
          source={require("@/assets/images/icons/peopleGroup.png")}
          style={styles.groupImage}
        />
      </ThemedView>
    </ThemedView>
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText style={styles.title}>Live group discussion</ThemedText>
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
    flex: 1,
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    width: "100%",
  },
  title: {
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 24,
    color: "#000000",
  },
  view: {
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 24,
    color: "#5E626C",
  },
  list: {
    paddingHorizontal: 10,
  },
  card: {
    flexDirection: "column",
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 16,
    backgroundColor: "#EBF0F1",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  subHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#EBF0F1",
    marginBottom: 10,
  },
  subHeaderText: {
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: 16,
    color: "#333333",
  },
  icon: {
    width: 66,
    height: 30,
  },
  description: {
    fontFamily: "Poppins",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 20,
    color: "#5E626C",
    marginBottom: 12,
  },
  bottomHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#EBF0F1",
  },
  bottomHeaderText: {
    fontFamily: "Poppins",
    fontWeight: "400",
    fontSize: 14,
    color: "#333333",
  },
  groupImage: {
    width: 80,
    height: 25,
  },
});
