import { StyleSheet, Image, Dimensions, TouchableOpacity, View } from "react-native";
import { ThemedView } from "./ThemedView";
import Carousel from "react-native-reanimated-carousel";
import { SetStateAction, useState } from "react";

export function HeaderCard() {
  const width = Dimensions.get("window").width;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePointPress = (index: SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  return (
    <ThemedView style={styles.container}>
      <Carousel
        loop
        width={width - 48}
        height={width / 2}
        autoPlay={true}
        data={[...new Array(3).keys()]}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => setCurrentIndex(index)}
        renderItem={({ index }) => (
          <ThemedView
            style={{
              flex: 1,
              justifyContent: "center",
            }}
          >
            <Image
              source={require("@/assets/images/slider.png")}
              style={styles.headerCard}
            />
          </ThemedView>
        )}
      />

      <ThemedView style={styles.pointsContainer}>
        {[...new Array(3).keys()].map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.point,
              currentIndex === index && styles.activePoint,
            ]}
            onPress={() => handlePointPress(index)}
          />
        ))}
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 24,
    backgroundColor: "#FFFFFF",
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
  },
  headerCard: {
    width: "100%",
    height: "100%",
    borderRadius: 32,
  },
  pointsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  point: {
    width: 10,
    height: 10,
    margin: 5,
    borderRadius: 5,
    backgroundColor: "#C0C4EA", // Default color for inactive points
  },
  activePoint: {
    backgroundColor: "#F15223", // Color for the active point
  },
});
