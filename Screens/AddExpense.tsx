// Import React
import React, {useState} from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';

// Import components from react native
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import fonts from '../styles/types';

import InputComponent from '../components/InputComponent';
import ButtonComponent from '../components/button';
import AppBar from '../components/AppBar';
import DropdownInput from '../components/DropdownInput';

type ExpenseScreenProps = {
  navigation: NavigationProp<Record<string, object | undefined>>
}

const AddExpense: React.FC<ExpenseScreenProps> = ({navigation}) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const categories: string[] = [
    'Food',
    'Transportation',
    'Entertainment',
    'Milk',
    'Eggs',
    'Gym',
    'Meat',
    'Rent',
    'Fruit',
    'Others'
  ];

  const handleSaveExpense = () => {
    // Logic to save the expense
    console.log('Amount:', amount);
    console.log('Category:', category);

    navigation.navigate('BudgetOverview', {'amount': {amount}})

  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View>
        <Text style={fonts.TitleLarge}>Add Expense {'\n'}</Text>
      </View>

      <InputComponent
        label="How much did you spend?"
        placeholder="Enter amount in KES"
        value={amount}
        onChangeText={setAmount}
        keyboardType='numeric'
      />
      <DropdownInput
        label="What did you spend on?"
        placeholder="Select category"
        options={categories}
        value={category}
        onSelect={setCategory}
      />

      <View style={{paddingTop: 32}}>
        <ButtonComponent onPress={handleSaveExpense} label="Add Expense" />
      </View>
    </KeyboardAvoidingView>
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
});

export default AddExpense;
