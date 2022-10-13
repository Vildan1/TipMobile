import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import Home from "../pages/HomeScreen";
import Search from "../pages/SearchScreen";
import SettingsScreen from "../pages/SettingScreen";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator 
   
    screenOptions={{
      tabBarActiveTintColor: '#ffffff',
      tabBarInactiveTintColor: '#ffffff',
      tabBarStyle: 
      { position: 'absolute' , backgroundColor: '#ffffff' ,height:"8%", },
    }}
  

    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name={"home"} color={"#1CB1E2"} size={size}  />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name={"search"} color={"#1CB1E2"} size={size} />
          ),
          
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name={"gear"} color={"#1CB1E2"} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default MyTabs;
