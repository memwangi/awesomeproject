// Import React
import React, {useState} from 'react';

// Import components from react native
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import styled from 'styled-components/native';
import fonts from './styles/types';
import {
  bodyTextColor,
  inputBorderColor,
  textFilledPrimary,
  textPrimaryColor,
} from './styles/colors';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={fonts.TitleLarge}>
          The title font, aka, Title Large. {'\n'}
          We use it all throughout the application as the default titles on
          every screen.{'\n'}
        </Text>

        <Text style={fonts.BodyLarge}>
          The large body font aka, BodyLarge. We use it all throughout the
          application as the default font for body fonts. This means instances
          like: Subtitles Buttons Input texts
          {'\n'}
        </Text>

        <Text style={fonts.BodyMedium}>
          This is a medium body font, aka, BodyMedium {'\n'}
          We use it in scenarios where we want to display information that
          supports the main content on a screen. {'\n'}
          {'\n'}
          Such as a support hint/error state for a text input component. Or text
          styling for the terms and conditions statement.
          {'\n'}
        </Text>
      </View>

      <InputComponent label="This is an input label aka, LableLarge" />
      <InputComponent label="This is another input, but with an error." />
    </View>
  );
};

type InputProps = {
  label: string;
};

const InputComponent = (props: InputProps) => {
  const [text, setText] = useState('');

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={{display: 'flex', justifyContent: 'space-between', marginTop: 16}}>
      <Text style={fonts.LableLarge}>{props.label}</Text>
      <TextInput
        style={{
          height: 48,
          borderWidth: isFocused ? 2 : 1,
          padding: 10,
          backgroundColor: '#FFFFFF',
          borderColor: isFocused ? 'black': inputBorderColor.code,
          borderRadius: 8,
          marginTop: 8,
          fontFamily: 'Lato-Regular',
          fontSize: 16,
          color: bodyTextColor.code,
        }}
        placeholder="Type here to translate!"
        placeholderTextColor={textFilledPrimary.code}
        onChangeText={newText => setText(newText)}
        defaultValue={text}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: 'ghostwhite',
    ...Platform.select({
      ios: {paddingTop: 20},
      android: {paddingTop: StatusBar.currentHeight},
    }),
  },

  box: {
    height: 100,
    marginBottom: 20,
    padding: 4,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'darkslategray',
  },

  input: {
    height: 48,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderColor: inputBorderColor.code,
    borderRadius: 8,
    marginTop: 8,
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: bodyTextColor.code,
  },
});

export default App;
