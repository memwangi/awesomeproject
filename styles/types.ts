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
}

const fonts: Typescale = StyleSheet.create({
  DisplayLarge: {
    fontFamily: 'Lato-Black',
    fontSize: 57,
    fontWeight: '400',
    lineHeight: 64,
    color: textPrimaryColor.code,
  },

  DisplayMedium: {
    fontFamily: 'Lato-Black',
    fontSize: 45,
    fontWeight: '400',
    lineHeight: 52,
    color: textPrimaryColor.code,
  },

  DisplaySmall: {
    fontFamily: 'Lato-Black',
    fontSize: 36,
    fontWeight: '400',
    lineHeight: 44,
    color: textPrimaryColor.code,
  },

  HeadlineLarge: {
    fontFamily: 'Lato-Black',
    fontSize: 32,
    fontWeight: '400',
    lineHeight: 40,
    color: textPrimaryColor.code,
  },

  HeadlineMedium: {
    fontFamily: 'Lato-Black',
    fontSize: 28,
    fontWeight: '400',
    lineHeight: 36,
    color: textPrimaryColor.code,
  },

  HeadlineSmall: {
    fontFamily: 'Lato-Black',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 32,
    color: textPrimaryColor.code,
  },

  TitleLarge: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    lineHeight: 28,
    color: textPrimaryColor.code,
  },

  TitleMedium: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    letterSpacing: 0.15,
    lineHeight: 24,
    color: 'black',
  },

  TitleSmall: {
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    lineHeight: 20,
    color: 'black',
  },

  LableLarge: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.1,
    color: textPrimaryColor.code,
  },

  LableSmall: {
    fontFamily: 'Lato-Bold',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.5,
    color: textPrimaryColor.code,
  },

  BodyLarge: {
    fontFamily: 'Lato-Medium',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
    color: bodyTextColor.code,
  },

  BodyMedium: {
    fontFamily: 'Lato-Semibold',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0.5,
    color: bodyTextColor.code,
  },

  BodySmall: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
    color: bodyTextColor.code,
  },

  ButtonText: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
    color: 'black',
  },
});

export default fonts;
