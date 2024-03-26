import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from 'react-native';
import {
  inputBorderColor,
  bodyTextColor,
  textFilledPrimary,
  errorTextColor,
} from '../styles/colors';
import fonts from '../styles/types';

type InputProps = {
  label: string;
  error?: boolean;
  placeholder: string;
  value: string
  onChangeText: (text: string) => void;
  keyboardType? : 'default' | 'numeric' | 'email-address' | 'phone-pad';

};

const InputComponent = (props: InputProps) => {
  

  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState(props.error);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const inputStyles: StyleProp<ViewStyle>[] = [styles.inputDefault];
  if (props.error) {
    inputStyles.push(styles.inputError);
  }

  if (isFocused) {
    inputStyles.push(styles.inputFocused);
  }

  return (
    <View style={{display: 'flex', justifyContent: 'center', marginTop: 16}}>
      <Text style={[fonts.LableLarge, styles.labelText]}>{props.label}</Text>
      <TextInput
        style={inputStyles}
        placeholder={props.placeholder}
        placeholderTextColor={textFilledPrimary.code}
        onChangeText={props.onChangeText}
        defaultValue={props.value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        keyboardType={props.keyboardType}
      />
      {error && (
        <Text style={[fonts.BodyMedium, styles.errorText]}>
          Oops! Something is wrong! But we've still used Body Medium
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputDefault: {
    height: 46,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderColor: inputBorderColor.code,
    borderRadius: 8,
    marginTop: 8,
    fontFamily: 'PlusJakartaSans-Medium',
    fontSize: 16,
    color: bodyTextColor.code,
  },

  inputFocused: {
    borderWidth: 2,
    borderColor: 'black',
  },

  inputError: {
    borderColor: errorTextColor.code,
    borderWidth: 2,
  },

  errorText: {
    color: 'red',
    marginTop: 4,
  },

  labelText: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 16,
  },
});

export default InputComponent;
