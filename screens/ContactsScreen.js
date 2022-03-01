import { SectionList, StyleSheet, Text, View } from 'react-native';

import React from 'react';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 50,
  },
  sectionHeader: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    fontSize: 17,
    fontWeight: 'bold',
    backgroundColor: '#B0C3EA',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
   borderTopColor: 'black',
   borderWidth: 0.2,
  },
})

const ContactsScreen = () => {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'A', data: ['Adara', 'Agata','Ainhara', 'Aixa','Alegría', 'Alia', 'Alla','América']},
            {title: 'B', data: ['Bella', 'Belinda', 'Betsaida', 'Benedetto']},
            {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
            {title: 'F', data: ['Federica', 'Felipe', 'Flavio', 'Florina']},
            {title: 'H', data: ['Hugo', 'Hasna', 'Hally']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
            {title: 'M', data: ['Mariuxi', 'Mor', 'Maximiliano', 'Marianela, Marisabel']},
            {title: 'N', data: ['Nubia', 'Nadia', 'Noah', 'Nagore', ' Nahuel']},
            {title: 'O', data: ['Octavio', 'Opal', 'Otilia']},
            {title: 'R', data: ['Rafael', 'Rafaela', 'Rene', 'Roberto', 'Rogelio', 'Rodrigo']},
            {title: 'S', data: ['Samuel', 'Samael', 'Sabino', 'Sara', 'Sofia']},
            {title: 'W', data: ['Walter', 'Wini', 'Wendoline', 'Wendy', 'William']},
            {title: 'Z', data: ['Zaddiel', 'Zahir']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
}

export default ContactsScreen;