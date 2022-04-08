import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import Navigator from '../src/navigations';
import colors from './utility/Colors';

const App = () => {

  return (
    < >
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }} >
        <Navigator />
      </SafeAreaView>
    </>
  );
};

export default App;
