import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function ProductAllDetails() {
  const { rest } = useLocalSearchParams<{ rest: string[] }>();
  return (
    <View style={styles.container}>
      <Text>Product Details {rest.join("/")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
