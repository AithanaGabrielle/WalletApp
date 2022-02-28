import 'react-native-gesture-handler';

import { StyleSheet, Text, View } from 'react-native';

// Font Awesome Icons...
import {FontAwesome5} from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator()

// Hiding Tab Names...
export default function App() {
// Animated Tab Navigator....

  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{
        showLabel:false,
        // Floating Tab Bar...
        style:{
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 30,
          marginHorizontal: 20, 

        // Max Height...
        height: 60,
        borderRadius: 10, 

        //Shadow...
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowOffset: {
          width: 10,
          height: 10,
        }
        }
      }}>
        {
          // Tab Screens...

          // Tab Icons
        }
        <Tab.Screen name ={"Home"} component={HomeScreen} options={{
          tabBarIcon: ({focused}) => (
            <View style={{
              // Centring Tab Button...
              position: 'absolute',
              top: '50%',
            }}>
              <FontAwesome5
              name="home"
              size={20}
              color={focused ? '#6889E2' : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }}></Tab.Screen>

        <Tab.Screen name ={"Balance"} component={BalanceScreen} options={{
           tabBarIcon: ({focused}) => (
            <View style={{
              // Centring Tab Button...
              position: 'absolute',
              top: '50%',
            }}>
              <FontAwesome5
              name="chart-line"
              size={20}
              color={focused ? '#6889E2' : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }}></Tab.Screen>
      
        <Tab.Screen name ={"QRCode"} component={QRCodeScreen} options={{
           tabBarIcon: ({focused}) => (
            <View style={{
              // Centring Tab Button...
              position: 'absolute',
              top: '50%',
            }}>
              <FontAwesome5
              name="expand"
              size={20}
              color={focused ? '#6889E2' : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }}></Tab.Screen>

        <Tab.Screen name ={"Contacts"} component={ContactsScreen} options={{
           tabBarIcon: ({focused}) => (
            <View style={{
              // Centring Tab Button...
              position: 'absolute',
              top: '50%',
            }}>
              <FontAwesome5
              name="ello"
              size={20}
              color={focused ? '#6889E2' : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }}></Tab.Screen>

        <Tab.Screen name ={"Services"} component={ServicesScreen} options={{
           tabBarIcon: ({focused}) => (
            <View style={{
              // Centring Tab Button...
              position: 'absolute',
              top: '50%',
            }}>
              <FontAwesome5
              name="receipt"
              size={20}
              color={focused ? '#6889E2' : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }}></Tab.Screen>

      </Tab.Navigator>
      
    </NavigationContainer>
  );
}

function  HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function BalanceScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Balance!</Text>
    </View>
  );
}

function QRCodeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>QR Code!</Text>
    </View>
  );
}

function ContactsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Contacts!</Text>
    </View>
  );
}

function ServicesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Services!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
