import React from "react";
import {StyleSheet, Text, View, SafeAreaView, Platform, ScrollView} from "react-native";

export default function App() {
  return (
    <SafeAreaView>
        <ScrollView>
      <View style={{
flex: 1,
          borderWidth: 0.2,
          borderRadius: 8, margin: 8, minHeight: 160, padding: 16
      }}>
        <Text  style={{textAlign: 'center', fontWeight: '900'}}>Expo</Text>
          <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
      </View>
      <View style={{
          flex: 1,
          borderWidth: 0.2,
          borderRadius: 8, margin: 8,minHeight: 160, padding: 16
      }}>
        <Text  style={{textAlign: 'center', fontWeight: '900'}}>React native</Text>
          <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
      </View>
      <View style={{
          flex: 1,
          borderWidth: 0.2,
          borderRadius: 8, margin: 8, minHeight: 160, padding: 16
      }}>
        <Text style={{textAlign: 'center', fontWeight: '900'}}>Javascript</Text>
          <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
      </View>
            <View style={{
                flex: 1,
                borderWidth: 0.2,
                borderRadius: 8, margin: 8,minHeight: 160, padding: 16
            }}>
                <Text  style={{textAlign: 'center', fontWeight: '900'}}>React native</Text>
                <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {

      flexDirection: 'row',
    alignItems :"space-evenly",

  },
  text: {
    fontSize: 40,
  },
});
