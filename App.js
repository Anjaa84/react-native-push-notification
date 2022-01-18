import PushNotification from "react-native-push-notification";
import React, { useCallback } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  TextInput
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import tw from 'tailwind-react-native-classnames'

const Container = () => {
  return (
    <View style={[tw`flex flex-row justify-between items-center p-1 h-1/6 w-full -bottom-5`, {
      position: 'absolute',
    }]}>

      <View style={[tw`flex-1 flex-row bg-white rounded-full ml-2 justify-between`]}>

        <TextInput
          style={[tw`rounded-full ml-2 justify-between`]}
          placeholder="Type a message"
        />
      </View>

    </View>
  )
}

PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token) {
    console.log("TOKEN:", token);
  },

  // (required) Called when a remote is received or opened, or local notification is opened
  onNotification: function (notification) {
    console.log("NOTIFICATION:", notification);

    // process the notification

    // (required) Called when a remote is received or opened, or local notification is opened
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },





  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },


  popInitialNotification: true,
  requestPermissions: Platform.OS === 'ios',

});




const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };



  const sendNotification = () => {
    console.log('hiiii')
    PushNotification.localNotification(
      {
        channelId: "IPL",
        title: "Cricket match", // (optional)
        message: "Today at 5 pm! Get ready", // (required)


      }
    )
  }


  const scheduleNotification = () => {
    console.log('hiiii')
    PushNotification.localNotificationSchedule(
      {
        message: "Its been 6 second ", // (required)
        date: new Date(Date.now() + 6 * 1000), //
      }
    )
  }







  return (

    <SafeAreaView style={backgroundStyle}>
      <View style={tw`bg-blue-900 pt-6`}>

        <TouchableOpacity
          onPress={sendNotification}>
          <Text>Send a notification</Text>
        </TouchableOpacity >
        <Container>
        </Container>




      </View>
      <View style={tw`bg-red-500 pt-6`}>

        <TouchableOpacity
          onPress={scheduleNotification}
          style={{ justifyContent: 'center', }}


        ><Text>Schedulte a notification</Text>

        </TouchableOpacity >


      </View>



    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
