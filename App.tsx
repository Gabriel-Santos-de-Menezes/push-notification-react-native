import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import OneSignal from 'react-native-onesignal';

// ea818e9b-3359-40e4-9158-3531a3aa61da

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    OneSignal.setLogLevel(6, 0);
    OneSignal.setAppId("ea818e9b-3359-40e4-9158-3531a3aa61da");

    // Pegando a notificação quando for recebida
    OneSignal.setNotificationOpenedHandler((notification) => {
      console.log("Notification: ", notification);
    });
  }, []);


  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text style={styles.text}>Notificações</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
  }
});

export default App;
