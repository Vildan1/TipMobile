import React, { useCallback, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Button } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { StyleSheet } from "react-native";
import * as DocumentPicker from "expo-document-picker";

const SuggestYourFriend = () => {
  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
  };
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Yıllık İzin", value: "0" },
    { label: "Doğum İzni", value: "1" },
    { label: "Mazeret İzni", value: "2" },
  ]);

  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);

  const [items2, setItems2] = useState([
    { label: "Yıllık İzin", value: "0" },
    { label: "Doğum İzni", value: "1" },
    { label: "Mazeret İzni", value: "2" },
  ]);

  return (
    <View style={styles.main}>
      <View style={{ position: "relative", zIndex: 9999 }}>
        <DropDownPicker
          style={styles.text}
          placeholder="İzin Türü Seçiniz"
          open={open}
          value={value}
          onOpen={() => setOpen2(false)}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </View>

      <View>
        <DropDownPicker
          style={styles.text}
          placeholder="İzin Türü Seçiniz"
          open={open2}
          value={value2}
          items={items2}
          onOpen={() => setOpen(false)}
          setOpen={setOpen2}
          setValue={setValue2}
          setItems={setItems2}
        />
      </View>
      <View style={styles.textAreaContainer}>
        <TextInput
          style={styles.textArea}
          underlineColorAndroid="transparent"
          placeholder="Mesaj..."
          placeholderTextColor="grey"
          onPressIn={() => {
            setOpen(false);
            setOpen2(false);
          }}
          numberOfLines={10}
          multiline={true}
        />
      </View>
      <View>
        <View style={[styles.touchButton, { justifyContent: "flex-start" }]}>
          <TouchableOpacity onPress={pickDocument}>
            <Text style={styles.textButton}>CV Yükle 📑</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.touchButton, { justifyContent: "flex-end" }]}>
          <TouchableOpacity>
            <Text style={styles.textButton}>Gönder</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    margin: 10,
    position: "relative",
    zIndex: 98,
  },
  text: {
    marginTop: 10,
    opacity: 0.5,
  },
  textAreaContainer: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 3,
    backgroundColor: "white",
    borderColor: "#D4D4D4",
    marginTop: 10,
    opacity: 0.5,
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start",
    opacity: 0.5,
  },
  touchButton: {
    marginTop: 10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  textButton: {
    backgroundColor: "#1CB1E2",
    height: "auto",
    borderRadius: 8,
    textAlign: "center",
    marginTop: 10,
    lineHeight: 40,
    color: "white",
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
export default SuggestYourFriend;
