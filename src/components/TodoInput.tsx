import React, { useState, FC } from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import checkIcon from '../assets/icons/Check.png';

interface TodoInputProps {
  isEnabled: boolean;
  addTask: (task: string) => void;
}

export const TodoInput: FC<TodoInputProps> = ({ isEnabled, addTask }) => {
  const [task, setTask] = useState('');

  function handleAddNewTask() {
    //TODO - Call addTask and clean input value
    addTask(task);
    setTask('');
  }

  return (
    <View
      style={[
        styles.inputContainer,
        Platform.OS === 'ios'
          ? styles.inputIOSShadow
          : styles.inputAndroidShadow,
        { backgroundColor: isEnabled ? '#34313D' : '#F5F4F8' },
      ]}
    >
      <TextInput
        style={[
          styles.input,
          { backgroundColor: isEnabled ? '#34313D' : '#F5F4F8' },
        ]}
        placeholder="Add new task..."
        placeholderTextColor={'#A09CB1'}
        returnKeyType="send"
        //TODO - use value, onChangeText and onSubmitEditing props
        value={task}
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={[
          styles.addButton,
          { backgroundColor: isEnabled ? '#988BC7' : '#3FAD27' },
        ]}
        //TODO - onPress prop
        onPress={handleAddNewTask}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    // backgroundColor: '#F5F4F8',
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputIOSShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  inputAndroidShadow: {
    elevation: 5,
  },
  addButton: {
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});
