import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {  } from '@react-navigation/native-stack';

import SignIn from './pages/SignIncreateNativeStackNavigator';
import Main from './pages/Main';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;