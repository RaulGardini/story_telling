import { createDrawerNavigator } from '@react-navigation/drawer';
import Tab_navigator from './tab_navigator';
import Profile from '../screens/profile';

const Drawer = createDrawerNavigator();

export default function Drawer_navigator() {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Tab_navigator} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
  );
}