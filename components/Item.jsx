import React from "react";
import { View, Text, Switch, TouchableOpacity, StyleSheet } from "react-native";

const Item = ({ all, toggleAll, deleteAll }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.checkboxContainer}>
        <Switch value={all.completed} onValueChange={toggleAll} />
        <Text
          style={[styles.text, all.completed && styles.completedText]}
          onPress={toggleAll}
        >
          {all.text}
        </Text>
      </View>
      <TouchableOpacity style={styles.deleteButton} onPress={deleteAll}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  deleteButton: {
    backgroundColor: '#ff0000',
    padding: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Item;
