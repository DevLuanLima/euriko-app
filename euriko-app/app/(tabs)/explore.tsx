import { StyleSheet, Image, Platform, View } from "react-native";
import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { AreaChart, XAxis, YAxis } from 'react-native-svg-charts';

export default function TabTwoScreen() {
  // Dados fictícios para o gráfico de investimento
  const investmentData = [
    { date: "Jan", value: 1000 },
    { date: "Feb", value: 2500 },
    { date: "Mar", value: 4500 },
    { date: "Apr", value: 7000 },
    { date: "May", value: 8500 },
    { date: "Jun", value: 12000 },
  ];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore</ThemedText>
      </ThemedView>

      <ThemedText>
        This app includes example code to help you get started.
      </ThemedText>

      {/* Gráfico de Investimento */}
      <Collapsible title="Investment Performance">
        <View style={styles.chartContainer}>
          <YAxis
            data={investmentData}
            yAccessor={({ item }) => item.value}
            style={{ marginBottom: 10 }}
            contentInset={{ top: 10, bottom: 10 }}
            svg={{ fontSize: 12, fill: "gray" }}
          />
          <View>
            <AreaChart
              style={styles.chart}
              width={300}
              height={200}
              data={investmentData}
              xAccessor={({ item }) => item.date}
              yAccessor={({ item }) => item.value}
              svg={{ fill: "rgba(134, 65, 244, 0.5)" }}
            />
            <XAxis
              data={investmentData}
              xAccessor={({ item }) => item.date}
              style={{ marginTop: 10 }}
              svg={{ fontSize: 12, fill: "gray" }}
            />
          </View>
        </View>
      </Collapsible>

      <Collapsible title="File-based routing">
        <ThemedText>
          This app has two screens:{" "}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{" "}
          <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  chartContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  chart: {
    marginLeft: 10,
  },
});
