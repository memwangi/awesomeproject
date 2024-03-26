import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface AppBarProps {
  title: string;
  onBackPress?: () => void;
}

const AppBar: React.FC<AppBarProps> = ({title, onBackPress}) => {
  return (
    <View style={styles.appBar}>
      {onBackPress && (
        <TouchableOpacity
          onPress={onBackPress}
          style={styles.backButton}></TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        onPress={() => console.log('Search button pressed')}
        style={styles.searchButton}>
        {/* <Ionicons name="search" size={24} color="white" /> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
    width: '100%', // Fill the entire width
    paddingTop: 40, // Adjust this value based on your design
  },
  backButton: {
    padding: 5,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchButton: {
    padding: 5,
  },
});

export default AppBar;
