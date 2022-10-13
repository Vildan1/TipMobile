import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Search from "../pages/SearchScreen";
import MeetingRoom from "../pages/MeetingRoom";
import Guide from "./Guide";
import Places from "./Places";
import Documents from "./Documents";
import News from "./News";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import React from "react";
import { Image, StyleSheet, View, TouchableOpacity,  } from "react-native";
import { Linking } from "react-native";
import HomeScreen from "../pages/HomeScreen";
import {colors} from "../constants/colors";
import AnnualPermits from "../pages/AnnualPermits";
const Drawer = createDrawerNavigator();

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1, margin: -2 }}>
      <View style={{ flex: 0.9 }}>
        <DrawerContentScrollView {...props}>
          <Image
            style={styles.profileImage}
            source={require("../assets/tipLogo.png")}
          />
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </View>
      <View style={styles.footer}>
        
        <View>
          
          <TouchableOpacity
            onPress={() => props.navigation.navigate("HomeScreen")}
          >
            <Image
              style={{ marginTop: 10, height: 70, width: 70 }}
              source={require("../assets/TeknasyonLogo.png")}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.footer2}>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://www.linkedin.com/company/teknasyon/");
            }}
            style={{ marginRight: 4 }}
          >
            <FontAwesome name="linkedin-square" size={40} color={colors.blue} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://www.instagram.com/teknasyon/");
            }}
            style={{ marginRight: 4 }}
          >
            <FontAwesome name="instagram" size={40} color={colors.blue} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://www.facebook.com/teknasyon");
            }}
          >
            <FontAwesome name="facebook-square" size={40} color={colors.blue} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const DrawerTab = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: true,
        headerTransparent: true,
        headerTintColor: "#1CB1E2",
        headerTitleStyle: {
          display: "none",
        },
        
        drawerStyle: {
          width: "75%",
        },
        drawerLabelStyle: {
          fontSize: 14,
          color: "black",
        },
      }}
    >
      <Drawer.Screen
        name="Ana Sayfa"
        component={HomeScreen}
        options={{
          drawerIcon: () => (
            <Ionicons name="home-outline" size={22} color={colors.blue} />
          ),
        }}
      />

      <Drawer.Screen
        name="Teknasyon Life"
        component={Search}
        options={{
          drawerIcon: () => (
            <Ionicons name="search-outline" size={22} color={colors.blue} />
          ),
        }}
      />
      <Drawer.Screen
        name="Toplantı Odası Rezervasyonu"
        component={MeetingRoom}
        options={{
          drawerIcon: () => (
            <FontAwesome name="calendar" size={22} color={colors.blue} />
          ),
        }}
      />
      <Drawer.Screen
        name="Rehber"
        component={Guide}
        options={{
          drawerIcon: () => (
            <Ionicons name="people-outline" size={22} color={colors.blue} />
          ),
        }}
      />
      <Drawer.Screen
        name="Mekanlar"
        component={Places}
        options={{
          drawerIcon: () => (
            <Ionicons name="location-outline" size={22} color={colors.blue} />
          ),
        }}
      />
      <Drawer.Screen
        name="Dökümanlar"
        component={Documents}
        options={{
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="file-document-multiple-outline"
              size={22}
              color={colors.blue}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="İzinler"
        component={AnnualPermits}
        options={{
          drawerIcon: () => (
            <SimpleLineIcons name="plane" size={22} color={colors.blue} />
          ),
        }}
      />
      <Drawer.Screen
        name="Haberler ve Duyurular"
        component={News}
        options={{
          drawerIcon: () => (
            <Ionicons
              name="notifications-outline"
              size={22}
              color={colors.blue}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
const styles = StyleSheet.create({
  profileImage: {
    height: 60,
    width: 60,
    margin: 20,
  },
  footer: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footer2: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginRight: 20,
    marginTop: 10,
  },
});
export default DrawerTab;
