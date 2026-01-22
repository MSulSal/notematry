import { useState } from "react";
import { FlatList, Text, View } from "react-native";

export default function NoteScreen() {
  const [notes, setNotes] = useState([
    { id: "1", text: "Note One" },
    { id: "2", text: "Note One" },
    { id: "3", text: "Note One" },
  ]);

  return (
    <View>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}
