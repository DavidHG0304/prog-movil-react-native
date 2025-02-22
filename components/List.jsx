import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, FlatList, StyleSheet } from "react-native";
import Item from "./Item";

const List = () => {
  const [all, setAll] = useState([]);
  const [newAll, setNewAll] = useState("");

  const addAll = () => {
    if (newAll.trim() !== "") {
      setAll([...all, { text: newAll, completed: false }]);
      setNewAll("");
    }
  };

  const toggleAll = (index) => {
    const updateAll = all.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    );
    setAll(updateAll);
  };

  const deleteAll = (index) => {
    setAll(all.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={newAll}
        onChangeText={setNewAll}
        placeholder="Add a new task"
      />
      <TouchableOpacity style={styles.addButton} onPress={addAll}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>

      <FlatList
        data={all}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Item
            all={item}
            toggleAll={() => toggleAll(index)}
            deleteAll={() => deleteAll(index)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default List;
