// Import React
import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddExpense from './Screens/AddExpense';
import BudgetOverview from './Screens/SpendOverview';
import SpendOverview from './Screens/SpendOverview';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AddExpense"
          component={AddExpense}
          options={{title: 'Add Expense'}}
        />

        <Stack.Screen name="SpendOverview" component={SpendOverview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
