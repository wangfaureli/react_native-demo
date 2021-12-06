import React from 'react';
import {Text, View} from 'react-native';

import AppbarComponent from '../components/appbar';

const Page2 = ({navigation}) => {
  return (
    <>
      <AppbarComponent />
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Hello, world!</Text>
      </View>
    </>
  );
};
export default Page2;
