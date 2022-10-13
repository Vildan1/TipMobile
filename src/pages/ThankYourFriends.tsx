import React, { useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import birthdaysResponse from "../../mockServer/handlers/responses/birthdaysResponse";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";

const ThankYourFriendsStyle = () => {
  const [users, setUsers] = React.useState([]);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const onChangeSearch = useCallback(async (q) => {
    const filterToken = q.toLowerCase();

    if (typeof q !== "string" || q.length < 1) {
      setUsers([]);
      return;
    }

    const filterUser = birthdaysResponse.users
      .filter((item) => item.name.toLowerCase().includes(filterToken))
      .map((item) => ({
        id: item.id.toString(),
        title: item.name,
      }));

    setUsers(filterUser);
  }, []);

  return (
    <View style={{ height: "100%", width: "100%", backgroundColor: "white" }}>
      <View style={{ margin: 10 }}>
        <AutocompleteDropdown
          clearOnFocus={false}
          closeOnBlur={true}
          closeOnSubmit={false}
          onChangeText={onChangeSearch}
          dataSet={users}
          onSelectItem={(item) => setSelectedItem(item)}
        />

        <TextInput
          style={styles.textArea}
          underlineColorAndroid="transparent"
          placeholder="Mesaj..."
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
        />
        <View style={styles.touchButton}>
          <TouchableOpacity>
            <Text style={styles.textButton}>Teşekkür et</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  searchInput: {
    marginBottom: 10,
    marginTop: 10,
  },
  textarea: {
    height: "60%",
    width: "100%",
    borderWidth: 2,
    borderColor: "#D4D4D4",
    borderRadius: 8,
    marginBottom: 10,
    padding: 10,
  },
  touchButton: {
    marginTop: 10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  textButton: {
    backgroundColor: "#1CB1E2",
    paddingLeft: 10,
    paddingRight: 10,
    height: "auto",
    borderRadius: 8,
    textAlign: "center",
    marginTop: 10,
    lineHeight: 40,
    color: "white",
    fontSize: 16,
  },
  textArea: {
    height: 200,
    justifyContent: "flex-start",
    opacity: 0.5,
    borderWidth: 1,
    padding: 5,
    borderRadius: 3,
    backgroundColor: "white",
    borderColor: "#D4D4D4",
    marginTop: 10,
  },
});
export default ThankYourFriendsStyle;
