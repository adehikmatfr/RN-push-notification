import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {showNotify, removeNorify} from './src/android/push_notify';

const App = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handelClick = (now) => {
    console.log(message);
    title === '' || message === ''
      ? alert('Input your fild now')
      : now
      ? showNotify(title, message)
      : showNotify(title, message, 5);
  };

  return (
    <View style={styles.container}>
      <Text>PUSH notify</Text>
      <TextInput
        style={styles.InputText}
        placeholder="input here for Title"
        onChangeText={(text) => setTitle(text)}
        defaultValue={title}
      />
      <TextInput
        style={styles.InputText}
        placeholder="input here for Message"
        onChangeText={(text) => setMessage(text)}
        defaultValue={message}
      />
      <TouchableOpacity activeOpacity={0.6} onPress={() => handelClick(true)}>
        <View style={styles.button}>
          <Text style={styles.buttonTitle}>get notifycation</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.6} onPress={() => handelClick(false)}>
        <View style={styles.button}>
          <Text style={styles.buttonTitle}>get notifycation after 5s</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.6} onPress={() => removeNorify}>
        <View style={styles.button}>
          <Text style={styles.buttonTitle}>remove notifycation</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 16,
    backgroundColor: 'blue',
    borderRadius: 10,
    marginVertical: 15,
  },
  buttonTitle: {
    color: 'white',
  },
  InputText: {
    height: 40,
    borderStyle: 'solid',
    marginVertical: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export default App;
