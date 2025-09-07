import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ marginBottom: 20 }}>Home Page</Text>
      <Link href="/about">Go to About</Link>
      <Link href="/profile" style={{ marginTop: 10 }}>
        Profile
      </Link>
      {/* Example link to a dynamic product page */}
      <Link href="/products" style={{ marginTop: 10 }}>
        Products
      </Link>
    </View>
  );
}
