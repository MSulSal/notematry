import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View>
      <Text>Welcome to NoteMatry</Text>
      <TouchableOpacity onPress={() => router.push("./notes")}>
        <Text>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}
