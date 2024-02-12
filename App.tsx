
// Import React
import React from 'react';

// Import components from react native
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import fonts from './styles/types';


const App: React.FC = () => {
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Text style={fonts.TitleLarge}>
          Let's get to know you.
        </Text>
        <Text style={fonts.BodyLarge}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </SafeAreaView>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
});


export default App;