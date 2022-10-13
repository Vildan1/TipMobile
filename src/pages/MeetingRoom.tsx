import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";
import { colors } from "../constants/colors";
import meetingRooms from "../../mockServer/handlers/responses/meetingRooms";
const Item = (item, navigation, index) => (
  <TouchableOpacity
    activeOpacity={0.8}
    key={index}
    style={styles.main}
    onPress={() => navigation.navigate("CalendarEvents")} >
    <ImageBackground style={styles.roomStyle} source={item.image}>
      <View style={styles.containerToolTip}>
        <Text style={styles.toolTip}>{item.floor}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.meetingRoomName}>{item.name}</Text>
        <Text style={styles.meetingRoomCapacity}>{item.capacity}</Text>
      </View>
    </ImageBackground>
  </TouchableOpacity>
);

const MeetingRoom = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={meetingRooms.rooms}
        scrollEnabled={true}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => Item(item, navigation, index)}
      ></FlatList>
    </View>
  );
};
export default MeetingRoom;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 5,
    marginTop:30,
    flex: 3,
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
  roomStyle: {
    width: "auto",
    height: 130,
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
