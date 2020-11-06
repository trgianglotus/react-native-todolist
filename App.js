import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Header from './components/Header';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: 1 },
    { text: 'create an app', key: 2 },
    { text: 'play on the switch', key: 3 },
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View>
          <FlatList
            data={todos}
            renderItem={({ item }) => {
              return <Text>{item.text}</Text>;
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
