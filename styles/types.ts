import {StyleSheet, TextStyle} from 'react-native';
import { bodyTextColor, textPrimaryColor } from './colors';

interface Typescale {
  DisplayLarge: TextStyle;
  DisplayMedium: TextStyle;
  DisplaySmall: TextStyle;
  HeadlineLarge: TextStyle;
  HeadlineMedium: TextStyle;
  HeadlineSmall: TextStyle;
  TitleLarge: TextStyle;
  TitleMedium: TextStyle;
  TitleSmall: TextStyle;
  LableLarge: TextStyle;
  LableSmall: TextStyle;
  BodyLarge: TextStyle;
  BodyMedium: TextStyle;
  BodySmall: TextStyle;
  ButtonText: TextStyle;
}

const fonts: Typescale = StyleSheet.create({
  DisplayLarge: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 57,
    fontWeight: '400',
    lineHeight: 64,
    color: textPrimaryColor.code,
  },

  DisplayMedium: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 45,
    fontWeight: '400',
    lineHeight: 52,
    color: textPrimaryColor.code,
  },

  DisplaySmall: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 36,
    fontWeight: '400',
    lineHeight: 44,
    color: textPrimaryColor.code,
  },

  HeadlineLarge: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 32,
    lineHeight: 40,
    color: textPrimaryColor.code,
  },

  HeadlineMedium: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 28,
    lineHeight: 36,
    color: textPrimaryColor.code,
  },

  HeadlineSmall: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 18,
    lineHeight: 32,
    color: textPrimaryColor.code,
  },

  TitleLarge: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 24,
    lineHeight: 28,
    color: textPrimaryColor.code,
  },

  TitleMedium: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 16,
    letterSpacing: 0.15,
    lineHeight: 24,
    color: 'black',
  },

  TitleSmall: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 14,
    lineHeight: 20,
    color: 'black',
  },

  LableLarge: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.1,
    color: textPrimaryColor.code,
  },

  LableSmall: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.5,
    color: textPrimaryColor.code,
  },

  BodyLarge: {
    fontFamily: 'PlusJakartaSans-Medium',
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0.2,
    color: bodyTextColor.code,
  },

  BodyMedium: {
    fontFamily: 'PlusJakartaSans-Medium',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.2,
    color: bodyTextColor.code,
  },

  BodySmall: {
    fontFamily: 'PlusJakartaSans-Medium',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
    color: bodyTextColor.code,
  },

  ButtonText: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.4,
  },
});

export default fonts;
