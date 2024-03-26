// Import React
import React, {useState} from 'react';
import {Text} from 'react-native';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {useRoute } from '@react-navigation/native';

type SpendOverviewProps = {
  navigation: NavigationProp<Record<string, object | undefined>>;
};

const SpendOverview: React.FC<SpendOverviewProps> = ({navigation}) => {
  const {route} = useRoute();
  return <Text>This is {route.params.name}'s profile</Text>;
};

export default SpendOverview;
