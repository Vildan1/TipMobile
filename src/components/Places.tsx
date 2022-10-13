import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Platform,
} from "react-native";
import { colors } from "../constants/colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import placesResponse from "../../mockServer/handlers/responses/placesResponse";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";

const Item = (item, navigation, index) => (
  <TouchableOpacity
    onPress={() => navigation.navigate("PlacesDetails")}
    activeOpacity={0.8}
    key={index}
    style={styles.main}>
    <ImageBackground style={styles.roomStyle} source={item.image}>
      <View style={styles.content}>
        <View >
        </View>
        <Text style={styles.meetingRoomName}>{item.placesName}</Text>
      </View>
    </ImageBackground>
    <View>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  </TouchableOpacity>
);

const Places = ({ navigation }) => {

  const [places, setPlaces] = React.useState([]);
  const [searchPlaces, setSearchPlaces] = React.useState([]);
  const [selectedItem, setSelectedItem] = React.useState(null);


  useEffect(() => {
    if (selectedItem != null && selectedItem != undefined) {
      var filteredPlaces = placesResponse.place.filter(
        (item) => {
          if (item.id == selectedItem?.id) {
            return item;
          }
        }
      )
      setPlaces(filteredPlaces);
    }
    else {
      setSearchPlaces(placesResponse.place
        .map((item) => ({
          id: item.id.toString(),
          title: item.placeName,
        })));

      setPlaces(placesResponse.place);
    }
  }, [selectedItem])




  const onChangeSearch = useCallback((q) => {

    const filterToken = q.toLowerCase();
    if (typeof q !== "string" || q.length < 1) {
      setPlaces(placesResponse.place);
      return;
    }
    
    const filterPlaces = placesResponse.place
      .filter((item) => item.placeName.toLowerCase().includes(filterToken))
      .map((item) => ({
        id: item.id.toString(),
        title: item.placeName,
      }));
    setSearchPlaces(filterPlaces);
  }, []);

  return (
    <View style={styles.container}>
      <View style={[{ flexDirection: "row", padding: 5, justifyContent: "space-between", alignItems: "center" }, Platform.select({ ios: { zIndex: 1 } })]}>

        <View
          style={{ width: "68%" }}>
          <AutocompleteDropdown

            clearOnFocus={false}
            closeOnBlur={true}
            closeOnSubmit={false}
            onChangeText={onChangeSearch}
            dataSet={searchPlaces}
            onSelectItem={(item) => {
              setSelectedItem(item);
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SuggestPlaces")}
        >
          <Text style={{ color: "white", fontSize: 12, }}> Mekan Önerisi</Text>
          <AntDesign name="pluscircleo" size={13} color={"white"} />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 20 }}>
        <FlatList
          data={places}
          scrollEnabled={true}
          numColumns={1}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => Item(item, navigation, index)}
        ></FlatList>
      </View>
    </View>
  );
};
export default Places;
const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 50,
    flex: 3,
  },
  description: {
    color: "black",
    fontSize: 12,
    padding: 5
  },
  containerToolTip: {
    position: "relative",
  },
  toolTip: {
    position: "absolute",
    right: 3,
    top: 3,
    padding: 2,
    backgroundColor: colors.blue,
    fontSize: 12,
    color: "white",
    width: "auto",
    borderWidth: 0.2,
    borderRadius: 4,
  },
  main: {
    borderWidth: 1,
    borderBottomColor: "black",
    margin: 5,
    borderRadius: 4,
    flex: 1,
  },
  button: {
    borderRadius: 8,
    padding: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "30%",
    height: 41,
    backgroundColor: colors.blue,
    alignItems: "center"
  },
  roomStyle: {
    width: "auto",
    height: 200,
    resizeMode: "contain",
  },
  content: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  meetingRoomName: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  meetingRoomCapacity: {
    fontSize: 11,
    color: "white",
    fontWeight: "bold",
  },
});