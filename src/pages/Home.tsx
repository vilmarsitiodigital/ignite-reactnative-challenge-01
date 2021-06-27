import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty
    if (newTaskTitle.length <= 0) {
      return;
    }
    const taskData = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };
    setTasks((oldState) => [...oldState, taskData]);
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(newTasks);
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View
      style={[{ flex: 1, backgroundColor: isEnabled ? '#1F1F1F' : '#fff' }]}
    >
      <Header isEnabled={isEnabled} toggleSwitch={toggleSwitch} />

      <TodoInput isEnabled={isEnabled ? true : false} addTask={handleAddTask} />

      <MyTasksList
        isEnabled={isEnabled ? true : false}
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </View>
  );
}
