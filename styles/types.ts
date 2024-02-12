import {StyleSheet, TextStyle} from 'react-native';

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
    color: 'black',
  },

  DisplayMedium: {
    fontFamily: 'Lato-Black',
    fontSize: 45,
    fontWeight: '400',
    lineHeight: 52,
    color: 'black',
  },

  DisplaySmall: {
    fontFamily: 'Lato-Black',
    fontSize: 36,
    fontWeight: '400',
    lineHeight: 44,
    color: 'black',
  },

  HeadlineLarge: {
    fontFamily: 'Lato-Black',
    fontSize: 32,
    fontWeight: '400',
    lineHeight: 40,
    color: 'black',
  },

  HeadlineMedium: {
    fontFamily: 'Lato-Black',
    fontSize: 28,
    fontWeight: '400',
    lineHeight: 36,
    color: 'black',
  },

  HeadlineSmall: {
    fontFamily: 'Lato-Black',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 32,
    color: 'black',
  },

  TitleLarge: {
    fontFamily: 'Lato-Black',
    fontSize: 22,
    lineHeight: 28,
    color: 'black',
  },

  TitleMedium: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.15,
    lineHeight: 24,
    color: 'black',
  },

  TitleSmall: {
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: 'black',
  },

  LableLarge: {
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    letterSpacing: 0.1,
    color: 'black',
  },

  LableSmall: {
    fontFamily: 'Lato-Bold',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 16,
    letterSpacing: 0.5,
    color: 'black',
  },

  BodyLarge: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
    color: 'black',
  },

  BodyMedium: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0.5,
    color: 'black',
  },

  BodySmall: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    letterSpacing: 0.4,
    color: 'black',
  },

  ButtonText: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: 0.5,
    color: 'black',
  },
});

export default fonts;
