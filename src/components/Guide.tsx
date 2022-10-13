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
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";
import birthdaysResponse from "../../mockServer/handlers/responses/birthdaysResponse";

const Item = (item, navigation, index) => (
  <TouchableOpacity
    onPress={() => navigation.navigate("GuideDetails")}
    activeOpacity={0.8}
    key={index}
    style={styles.main}
  >
    <ImageBackground style={styles.roomStyle}  source= {item.avatar}
        >
    <Text style={styles.description}>{item.name }  {item.surname}</Text>
     
    </ImageBackground>
  
  </TouchableOpacity>
);

const Places = ({ navigation }) => {
  const [guides, setGuides] = React.useState([]);
  const [searchGuides, setSearchGuides] = React.useState([]);
  const [selectedItem, setSelectedItem] = React.useState(null);

  useEffect(() => {
    if (selectedItem != null && selectedItem != undefined) {
      var filteredPlaces = birthdaysResponse.users.filter((item) => {
        if (item.id == selectedItem?.id) {
          return item;
        }
      });
      setGuides(filteredPlaces);
    } else {
      setSearchGuides(
        birthdaysResponse.users.map((item) => ({
          id: item.id.toString(),
          title: item.name,
        }))
      );

      setGuides(birthdaysResponse.users);
    }
  }, [selectedItem]);

  const onChangeSearch = useCallback((q) => {
    const filterToken = q.toLowerCase();
    if (typeof q !== "string" || q.length < 1) {
      setGuides(birthdaysResponse.users);
      return;
    }

    const filterPlaces = birthdaysResponse.users
      .filter((item) => item.name.toLowerCase().includes(filterToken))
      .map((item) => ({
        id: item.id.toString(),
        title: item.name,
      }));
    setSearchGuides(filterPlaces);
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={[
          {
            padding: 5,
            justifyContent: "space-between",
            alignItems: "center",
          },
          Platform.select({ ios: { zIndex: 1 } }),
        ]}
      >
        <View style={{ width: "100%" }}>
          <AutocompleteDropdown
            clearOnFocus={false}
            closeOnBlur={true}
            closeOnSubmit={false}
            onChangeText={onChangeSearch}
            dataSet={searchGuides}
            onSelectItem={(item) => {
              setSelectedItem(item);
            }}
          />
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <FlatList
          data={guides}
          scrollEnabled={true}
          numColumns={2}
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
    flex: 1,
  },
  description: {
    color: "white",
    fontSize: 16,
    padding: 40,
    textAlign: "center",
    justifyContent:"center",
    

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
    borderWidth: 3,
    borderColor: colors.blue,
    margin: 7,
    borderRadius: 5,
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
    alignItems: "center",
  },
  roomStyle: {
    width: "auto",
    height: 100,
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
