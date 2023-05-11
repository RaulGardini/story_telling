import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';
import Feed from '../screens/feed';
import CreateStory from '../screens/create_story';
import { StyleSheet } from 'react-native';


const Tab = createMaterialBottomTabNavigator();

export default function Tab_navigator() {
    return (
        <Tab.Navigator
        labeled = {false}
        barStyle = {styles.bottomTabStyle}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'feed') {
                iconName = focused
                  ? 'book'
                  : 'book-outline';
              } else if (route.name === 'create_story') {
                iconName = focused ? 'create' : 'create-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} style = {styles.icons} />;
            }
          })}
          activeColor='#ee8249'
          inactiveColor='gray'
        >
          <Tab.Screen name="feed" component={Feed} />
          <Tab.Screen name="create_story" component={CreateStory} />
        </Tab.Navigator>
    );
  }

  const styles = StyleSheet.create({
    bottomTabStyle: {
      backgroundColor: "#2f345d",
      height: "8%",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      overflow: "hidden",
      position: "absolute"
    },
    icons: {
      width: RFValue(30),
      height: RFValue(30)
    }
  });
  