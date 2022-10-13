import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigator from  "./src/components/DrawerNavigator";
import HomeScreen from "./src/pages/HomeScreen";
import AnnualPermits from "./src/pages/AnnualPermits";
import SuggestYourFriend from "./src/pages/SuggestYourFriend";
import ThankYourFriends from "./src/pages/ThankYourFriends";
import MeetingRoom from "./src/pages/MeetingRoom";
import CalendarEvents from "./src/pages/CalendarEvents";
import PlacesDetails from "./src/components/PlacesDetails";
import SuggestPlaces from "./src/components/SuggestPlaces";
import GuideDetails from "./src/components/GuideDetails";
const Stack = createNativeStackNavigator();

const App = () => {
  return (

    <SafeAreaProvider>
      <StatusBar  />

        <NavigationContainer >
        <Stack.Navigator screenOptions={
          {
            headerBackTitleVisible: false,
          }
        }>
          <Stack.Screen
            name="Default"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="AnnualPermits" component={AnnualPermits}  options={{ title: 'Yıllık İzin' }}/>
          <Stack.Screen name="CalendarEvents" component={CalendarEvents} options={{ title: 'Rezervasyon' }}/>
          <Stack.Screen name="MeetingRoom" component={MeetingRoom}  options={{ title: 'Toplantı Odası' }}/>
          <Stack.Screen name="SuggestYourFriend" component={SuggestYourFriend} options={{ title: 'Arkadaşına Öner' }} />
          <Stack.Screen name="ThankYourFriends" component={ThankYourFriends} options={{ title: 'Teşekkür Et' }}/>
          <Stack.Screen name="HomeScreen"  component={HomeScreen}  options={{ headerBackVisible:true, headerShown:false, }}  />
          <Stack.Screen name="SuggestPlaces" component={SuggestPlaces} options={{title: 'Öneri Ekle'}} />
          <Stack.Screen name="PlacesDetails" component={PlacesDetails} options={{title: 'Mekan Detayı'}} />
          <Stack.Screen name="GuideDetails" component= {GuideDetails} options= {{title: 'Kişi Detay'}} />

          
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default App;
