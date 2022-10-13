import React, { useState } from "react";
import {
  TextInput,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../constants/colors";

const SuggestPlaces = () => {
  const [placeName, setPlaceName] = useState("");
  const [city, setCity] = useState("");
  const [adress, setAdress] = useState("");
  const [link, setLink] = useState("");
  const handleSubmit = () => {
    console.log(placeName);
  };

  return (
    <SafeAreaView style={{backgroundColor:"white", height:"100%"}}>
      <View style={styles.mainView}>
        <TextInput
          onChangeText={(text) => setPlaceName(text)}
          value={placeName}
          style={styles.nameInput}
          placeholder="Mekan Adı Giriniz.."
        />
        <TextInput
          onChangeText={(text) => setCity(text)}
          value={city}
          style={styles.nameInput}
          placeholder="İl/İlçe Giriniz.."
        />
        <TextInput
          onChangeText={(text) => setAdress(text)}
          value={adress}
          style={styles.nameInput}
          placeholder="Adres Giriniz.."
        />
        <TextInput
          onChangeText={(text) => setLink(text)}
          value={link}
          style={styles.nameInput}
          placeholder="Tanıtıcı Link"
        />
        <TextInput
          onChangeText={(text) => setLink(text)}
          value={link}
          style={[styles.nameInput, { height: 210 }]}
        />
      </View>

      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Kaydet</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainView: {
    padding: 10,
  },

  nameInput: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "black",
    padding: 10,
    marginBottom: 15,
  },

  button: {
    marginRight:30,
    marginLeft:30,
    backgroundColor: colors.blue,
    borderRadius: 15,
    padding: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize:15,
    fontWeight:"bold"
  },
});
export default SuggestPlaces;
