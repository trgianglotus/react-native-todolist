import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: 1 },
    { text: 'create an app', key: 2 },
    { text: 'play on the switch', key: 3 },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodo) => {
      return todos.filter((todo) => todo.key != key);
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View>
          <FlatList
            data={todos}
            renderItem={({ item }) => {
              return <TodoItem pressHandler={pressHandler} item={item} />;
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
