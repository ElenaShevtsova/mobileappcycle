/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigation } from "./src/navigation";

const App: () => Node = () => {
  return (
      <NavigationContainer>
        <RootNavigation/>
      </NavigationContainer>
  );
};


export default App;
