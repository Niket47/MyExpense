import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const Profile = () => {
  const [select, setSelect] = useState(0);
  return (
    <>
      <Text>Profile</Text>
      <View style={styles.tabview}>
        <TouchableOpacity
          style={[
            styles.btn,
            { backgroundColor: select == 0 ? 'green' : '#fff' },
          ]}
          onPress={() => {
            setSelect(0);
          }}>
          <Text>hi1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelect(1);
          }}
          style={[
            styles.btn,
            { backgroundColor: select == 1 ? 'green' : '#fff' },
          ]}>
          <Text>hi1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelect(2);
          }}
          style={[
            styles.btn,
            { backgroundColor: select == 2 ? 'green' : '#fff' },
          ]}>
          <Text>hi1</Text>
        </TouchableOpacity>
      </View>
      <View>{select == 1 && <Text>helo1</Text>}</View>
      <View>{select == 2 && <Text>helao1</Text>}</View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  tabview: {
    // backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
