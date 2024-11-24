import { StyleSheet, ScrollView, View } from "react-native";
import { Navbar } from "@/components/Navbar";
import { ThanksCard } from "@/components/ThanksCard";
import { DonationCard } from "@/components/DonationCard";
import NavigationMenu from "@/components/NavigationMenu";
import { HeaderCard } from "@/components/HeaderCard";
import { QuotesCard } from "@/components/QuotesCard";
import { LiveGroupDiscussion } from "@/components/LiveGroupDiscussion";
import { MusicGroupCard } from "@/components/MusicGroupCard";
import { KidsCard } from "@/components/KidsCard";
import { AudioCard } from "@/components/AudioCard";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Navbar */}
      <Navbar />
      {/* Header Card */}
      <HeaderCard />
      {/* Navigation Menu  */}
      <NavigationMenu />
      {/* Audio Card */}
      <AudioCard />
      {/* Quotes Card  */}
      <QuotesCard />
      {/* Music Group  */}
      <MusicGroupCard />
      {/* Live Group Discussion */}
      <LiveGroupDiscussion />
      {/* KidsCard */}
      <KidsCard />
      {/* Donation Card */}
      <DonationCard />
      {/* Thanks Card */}
      <ThemedView style={styles.bottomSpacing}>
        <ThanksCard />
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    marginBottom: 50,
    backgroundColor: "#FFFFFF",
  },
  bottomSpacing: {
    marginBottom: 60,
  },
});
