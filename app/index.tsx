import { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Image,
  Pressable,
  Switch,
  Text,
  TextInput,
  View
} from "react-native";

function HomeScreen() {
  const pressMe = () => {
    Alert.alert("Button Clicked");
  };
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [text, setText] = useState("");

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];

  return (
    <View>
      <Text style={{ fontSize: 24 }}>Hello From Home Screen</Text>
      <Button title="Click Me" onPress={pressMe} />
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <TextInput
        style={{ margin: 12, borderWidth: 1, padding: 10 }}
        keyboardType="numbers-and-punctuation"
        placeholder="Enter text here"
        value={text}
        onChangeText={setText}
        multiline
        numberOfLines={5}
      />
      <Pressable onPress={pressMe}>
        <Text>Make me Pressable</Text>
      </Pressable>
      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={{ width: 150, height: 150 }}
      />

      {/* <ImageBackground
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        style={{flex:1, width: 150, height: 150}}
      /> */}

      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Text style={{ padding: 8 }}>{item.title}</Text>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default HomeScreen;
