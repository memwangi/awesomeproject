import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from 'react-native';
import {
  inputBorderColor,
  bodyTextColor,
  textFilledPrimary,
  errorTextColor,
} from '../styles/colors';
import fonts from '../styles/types';

type DropdownInputProps = {
  label: string;
  options: string[];
  value: string;
  placeholder: string;
  onSelect: (option: string) => void;
};

const DropdownInput = (props: DropdownInputProps) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const window = Dimensions.get('window');
  const dropDownMaxHeight = window.height * 0.5; // Maximum height for the selection modal.

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleOptionSelect = (option: string) => {
    props.onSelect(option);
    setIsDropdownVisible(false);
  };

  return (
    <View style={{display: 'flex', justifyContent: 'center', marginTop: 16}}>
      <Text style={[fonts.LableLarge, styles.labelText]}>{props.label}</Text>
      <TouchableOpacity style={styles.inputDefault} onPress={toggleDropdown}>
        <Text style={fonts.BodyLarge}>{props.value || props.placeholder}</Text>
      </TouchableOpacity>

      <Modal visible={isDropdownVisible} transparent animationType="slide">
        <TouchableWithoutFeedback onPress={() => setIsDropdownVisible(false)}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>

        <View
          style={[styles.dropdownContainer, {maxHeight: dropDownMaxHeight}]}>
          <FlatList
            data={props.options}
            keyExtractor={item => item}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.optionItem}
                onPress={() => handleOptionSelect(item)}>
                <Text style={fonts.BodyLarge}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
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
  labelText: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 16,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dropdownIcon: {
    width: 24, // Adjust width and height based on your icon size
    height: 24,
    marginLeft: 8,
  },
  dropdownContainer: {
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  optionItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
});

export default DropdownInput;
