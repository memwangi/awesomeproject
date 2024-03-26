import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  Platform,
} from 'react-native';
import {buttonBackgroundColor} from '../styles/colors';
import fonts from '../styles/types';

interface MyButtonProps extends TouchableOpacityProps {
  label: string;
}

const ButtonComponent: React.FC<MyButtonProps> = ({
  onPress,
  label,
  ...rest
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={Platform.OS === 'ios' ? styles.buttonIOS : styles.buttonAndroid}
      {...rest}>
      <Text style={[styles.buttonText, fonts.ButtonText]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonAndroid: {
    backgroundColor: buttonBackgroundColor.code,
    padding: 12,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonIOS: {
    backgroundColor: buttonBackgroundColor.code,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3, // Shadow for iOS
  },
  buttonText: {
    color: 'white',
  },
});

export default ButtonComponent;
