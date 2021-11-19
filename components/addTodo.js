import React, { useState } from 'react';
import { TextInput, Text, View, StyleSheet, Button } from 'react-native';

export default function addTodo({ submitHandler }) {
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    const firstLetterCap = val.charAt(0).toUpperCase() + val.slice(1);

    setText(firstLetterCap);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => submitHandler(text)}
        title="add todo"
        color="coral"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
