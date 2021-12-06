import React from 'react';
import {View} from 'react-native';

import AppbarComponent from '../components/appbar';
import {useHistory} from 'react-router-dom';

const Page2 = () => {
  let history = useHistory();
  function handleClick() {
    history.push('/');
  }
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
        <button type="button" onClick={handleClick}>
          Go home
        </button>
      </View>
    </>
  );
};
export default Page2;
