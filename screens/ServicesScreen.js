import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

import {FontAwesome5} from '@expo/vector-icons'

const DATA = [
  {
    id: "1",
    title: "Bills",
  },
  {
    id: "2",
    title: "Internet",
  },
  {
    id: "3",
    title: "Transport",
  },
  {
    id: "4",
    title: "Booking",
  },
  {
    id: "5",
    title: "Shopping",
  },
  {
    id: "6",
    title: "Insurance",
  },
  {
    id: "7",
    title: "Events",
  },
  {
    id: "8",
    title: "Education",
  },
  {
    id: "9",
    title: "Charity",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
            <View style={{
              // Centring Tab Button...
              flex: 1, 
              justifyContent: 'center', 
              alignItems: 'center',
              top: '10%',
            }}>
              <FontAwesome5
              name="ello"
              size={30}
              ></FontAwesome5>
            </View>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const ServicesScreen = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6889E2" : "#B0C3EA";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    
  },
  item: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 30,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10, 
  },
  title: {
    paddingTop: 20,
    fontSize: 18,
  },
});

export default ServicesScreen;