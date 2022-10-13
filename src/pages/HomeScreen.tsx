import React, { useState, useEffect } from "react";
import newsResponse from "../../mockServer/handlers/responses/newsResponse";
import thanksFriends from "../../mockServer/handlers/responses/thanksFriends";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { StoryContainer } from "react-native-stories-view";

const HomeScreen = ({ navigation }) => {

  function setStory(image) {
    setShowStoryImageArray([]);
    setShowStory(!showStory);
    var show = false;
    newsResponse.news.map((item) => {
      if (image == item.image_url) {
        show = true;
      }

      if (show) {
        setShowStoryImageArray(oldArray => [...oldArray, item.image_url]);
      }

    })
  }

  const [showStory, setShowStory] = useState(false);
  const [showStoryImageArray, setShowStoryImageArray] = useState([]);

  return showStory == false ? (
    <View style={{ backgroundColor: "white", height: "80%" }}>
      <View style={styles.Main}>
        <View style={styles.topBar}>
          <Image

            style={styles.tipLogo}
            source={require('../assets/tipLogo.png')}

          />
          <TouchableOpacity style={styles.profile}>
            <Image
              style={styles.profileImage}
              source={require('../assets/profileImage.png')}

            />
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
          <View style={styles.StoryContainer}>
            {newsResponse.news.map(({ id, image_url, title }) => (
              <ProfileHead
                key={id}
                onPress={() => setStory(image_url)}
                uri={image_url}
                title={title}
              />
            ))}
          </View>
        </ScrollView>
        <ScrollView showsHorizontalScrollIndicator={false} >
        <TouchableOpacity
            onPress={() => navigation.navigate('ThankYourFriends')}
            style={[
              styles.ThankYourFriendsStyle,
              { backgroundColor: '#3498DB' },
            ]}
          >
            <View
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image style={{ height: 64, width: 64 }} source={thanksFriends.items[0].image} />
            </View>
            <View style={styles.Content}>
              <Text style={styles.textStyle}>{thanksFriends.items[0].title}</Text>
              <Text style={styles.text1Style}>{thanksFriends.items[0].subTitle}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('AnnualPermits')}
            style={[
              styles.ThankYourFriendsStyle,
              { backgroundColor: '#27AE60' },
            ]}
          >
            <View
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image style={{ height: 64, width: 64 }} source={thanksFriends.items[1].image} />
            </View>
            <View style={styles.Content}>
              <Text style={styles.textStyle}>{thanksFriends.items[1].title}</Text>
              <Text style={styles.text1Style}>{thanksFriends.items[1].subTitle}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('SuggestYourFriend')}
            style={[
              styles.ThankYourFriendsStyle,
              { backgroundColor: '#8E44AD' },
            ]}
          >
            <View
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image style={{ height: 64, width: 64 }} source={thanksFriends.items[2].image} />
            </View>
            <View style={styles.Content}>
              <Text style={styles.textStyle}>{thanksFriends.items[2].title}</Text>
              <Text style={styles.text1Style}>{thanksFriends.items[2].subTitle}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('MeetingRoom')}
            style={[
              styles.ThankYourFriendsStyle,
              { backgroundColor: '#2C3E50' },
            ]}
          >
            <View
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image style={{ height: 64, width: 64 }} source={thanksFriends.items[3].image} />
            </View>
            <View style={styles.Content}>
              <Text style={styles.textStyle}>{thanksFriends.items[3].title}</Text>
              <Text style={styles.text1Style}>{thanksFriends.items[3].subTitle}</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  ) : (
    <>
      <View style={{ position: 'relative', zIndex:999}}>
        <StoryContainer
          visible={showStory}
          enableProgress={true}
          onComplete={() => setShowStory(false)}
          images={showStoryImageArray}
          duration={10}
          containerStyle={{
            width: '100%',
            height: '100%',
            zIndex: 999,
            position: 'relative'
          }}
          imageStyle={{
            resizeMode: "contain",
            height: Dimensions.get("window").height, width: Dimensions.get("window").width,

          }}

        >
        </StoryContainer>

        <TouchableOpacity style={{ position: 'absolute' ,zIndex:999999, right:10,top:50}} onPress={()=>setShowStory(false)}>
          <FontAwesome name="close" size={30} color="gray"></FontAwesome>
        </TouchableOpacity>

      </View>


    </>


  );
};

const ProfileHead = ({ uri, title, onPress }) => {
  return (
    <View style={{ width: 100 }}>
      <TouchableOpacity onPress={onPress} style={styles.storyProfile}>
        <Image
          style={styles.storyProfileImage}
          source={{
            uri,
          }}
        />
      </TouchableOpacity>
      <Text numberOfLines={1} >
        {title}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  ThankYourFriendsStyle: {
    marginTop: 18,
    width: "100%",
    height: 115,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 23,

  },
  Content: {
    flex: 3,
    flexDirection: "column",
    alignItems: "flex-start",

  },
  textStyle: {
    fontSize: 18,
    color: "white",

  },
  text1Style: {
    fontSize: 15,
    color: "white",
  },
  Main: {
    margin: 5,
    position: "relative",

  },
  topBar: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  tipLogo: {
    width: 36,
    height: 36,
    marginLeft: "45%"

  },
  profile: {
    height: 35,
    width: 35,
    borderRadius: 32 / 2,
    borderColor: "black",
  },
  profileImage: {
    height: "100%",
    width: "100%",
    borderRadius: 32 / 2,
  },
  StoryContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    height: 'auto',
  },
  storyProfile: {
    marginTop: 10,
    height: 70,
    width: 70,
    borderRadius: 70 / 2,
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
 
  storyProfileImage: {
    height: "100%",
    width: "100%",
    borderRadius: 80 / 2,
  }

});

export default HomeScreen;