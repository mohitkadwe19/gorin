import React from "react";
import { StyleSheet, Image, FlatList, View, Text } from "react-native";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";

const data = [
  {
    id: "1",
    title: "Jumash",
    image: require("@/assets/images/icons/jumash.png"),
    progress: 8,
    timeRemaining: "4 min",
  },
  {
    id: "2",
    title: "Tania",
    image: require("@/assets/images/icons/tania.png"),
    progress: 25,
    timeRemaining: "10 min",
  },
  {
    id: "3",
    title: "Rambam",
    image: require("@/assets/images/icons/rambam.png"),
    progress: 0,
    timeRemaining: "2hrs 30 min",
  },
  {
    id: "4",
    title: "Hayom Yom",
    image: require("@/assets/images/icons/hayom-yom.png"),
    progress: 100,
    timeRemaining: "1hr 55 min",
  },
];

interface cardItem {
  id: string;
  title: string;
  image: any;
  progress: number;
  timeRemaining: string;
}

export function AudioCard() {
  const renderItem = ({ item }: { item: cardItem }) => (
    <ThemedView style={styles.card}>
      <ThemedView style={styles.cardContent}>
        <ThemedView style={styles.progressWrapper}>
          {item.progress > 0 ? (
            <ThemedView style={styles.progressContainer}>
              <ThemedView
                style={[styles.progressBar, { width: `${item.progress}%` }]}
              />
            </ThemedView>
          ) : (
            <ThemedText
              style={{
                color: "#fff",
                fontSize: 12,
                textAlign: "center",
              }}
            >
              Time to read
            </ThemedText>
          )}
          <ThemedView
            style={[
              item.progress > 0
                ? styles.progressTextContainer
                : {
                    ...styles.progressTextContainer,
                    justifyContent: "center",
                  },
            ]}
          >
            <ThemedText
              style={{
                color: "#fff",
                fontSize: 12,
              }}
            >
              {item.progress > 0 ? `${item.progress}% ` : ""}
            </ThemedText>
            <ThemedView style={styles.progressTimeContainer}>
              <Image
                source={require("@/assets/images/icons/clock.png")}
                style={styles.clockIcon}
              />
              <ThemedText
                style={{
                  color: "#fff",
                  fontSize: 12,
                }}
              >
                {item.timeRemaining}
              </ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>

        {/* Image */}
        <Image source={item.image} style={styles.cardImage} />

        {/* Title and additional info */}
        <ThemedView style={styles.detailsContainer}>
          <ThemedText style={styles.subHeaderText}>{item.title}</ThemedText>
          <ThemedView style={styles.bottomSection}>
            <ThemedView style={styles.infoContainer}>
              <Image
                source={require("@/assets/images/icons/audio.png")}
                style={styles.icon}
              />
              <Image
                source={require("@/assets/images/icons/video.png")}
                style={styles.icon}
              />
            </ThemedView>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );

  const chunkedData = [];
  for (let i = 0; i < data.length; i += 2) {
    chunkedData.push(data.slice(i, i + 2));
  }

  const renderRow = (rowData: cardItem[]) => {
    return (
      <ThemedView style={styles.row}>
        {rowData.map((item) => (
          <ThemedView key={item.id} style={styles.cardWrapper}>
            {renderItem({ item })}
          </ThemedView>
        ))}
      </ThemedView>
    );
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedView style={styles.headerLeftContainer}>
          <ThemedText style={styles.title}>Shiurim</ThemedText>
          <ThemedText style={styles.actionText}>(+50 Learn today)</ThemedText>
        </ThemedView>
        <ThemedText style={styles.view}> View more</ThemedText>
      </ThemedView>

      <FlatList
        data={chunkedData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => renderRow(item)}
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
    fontWeight: 600,
    fontSize: 20,
    lineHeight: 24,
    color: "#000000",
  },
  view: {
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 24,
    color: "#5E626C",
  },
  actionText: {
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: 12,
    color: "#F15223",
    marginLeft: 10,
    lineHeight: 18,
  },
  headerLeftContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  list: {
    flex: 1,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  cardWrapper: {
    flex: 1,
    marginHorizontal: 8,
  },
  card: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
  },
  cardContent: {
    position: "relative",
    width: "100%",
    alignItems: "center",
  },
  progressWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 115,
    zIndex: 2,
    alignItems: "center",
  },
  progressContainer: {
    width: "75%",
    backgroundColor: "#EBF0F1",
    height: 8,
    borderRadius: 5,
    marginBottom: 4,
  },
  progressTimeContainer: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
  },
  progressTextContainer: {
    fontFamily: "Poppins",
    width: "100%",
    fontSize: 14,
    fontWeight: "600",
    zIndex: 3,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  cardImage: {
    width: "100%",
    height: 225,
    borderRadius: 12,
    resizeMode: "contain",
    marginBottom: 12,
  },
  detailsContainer: {
    alignItems: "flex-start",
    marginTop: 12,
  },
  subHeaderText: {
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: 18,
    color: "#333333",
    marginBottom: 1,
    textAlign: "left",
  },
  bottomSection: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  infoContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  clockIcon: {
    width: 10,
    height: 10,
    resizeMode: "contain",
    marginRight: 4,
  },
});
