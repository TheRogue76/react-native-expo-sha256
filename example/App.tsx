import { StyleSheet, Text, View } from "react-native";
import { md5, sha1, sha256, sha384, sha512 } from "react-native-expo-sha256";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Initial text is: Hello there</Text>
      <Text>{`\n\nMD5 hashed version is: \n${md5("Hello there")}`}</Text>
      <Text>{`\n\nSHA1 hashed version is: \n${sha1("Hello there")}`}</Text>
      <Text>{`\n\nSHA256 hashed version is: \n${sha256("Hello there")}`}</Text>
      <Text>{`\n\nSHA384 hashed version is: \n${sha384("Hello there")}`}</Text>
      <Text>{`\n\nSHA512 hashed version is: \n${sha512("Hello there")}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
