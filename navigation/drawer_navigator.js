import { createDrawerNavigator } from '@react-navigation/drawer';
import Stack_navigator from './stack_navigator';
import Profile from '../screens/profile';

const Drawer = createDrawerNavigator();

export default function Drawer_navigator() {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Stack_navigator} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
  );
}